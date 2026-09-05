const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function readFile(filePath) {
	return fs.readFileSync(path.join(rootDir, filePath), 'utf8');
}

function readJson(filePath) {
	return JSON.parse(readFile(filePath));
}

function assert(condition, message) {
	if (!condition) {
		throw new Error(message);
	}
}

function assertFileExists(filePath, message) {
	assert(fs.existsSync(path.join(rootDir, filePath)), message);
}

function hasScript(indexHtml, scriptPath) {
	return indexHtml.includes(`src="${scriptPath}"`);
}

function hasElementId(indexHtml, id) {
	return indexHtml.includes(`id="${id}"`);
}

function assertScriptOrder(indexHtml, firstScript, secondScript) {
	assert(
		indexHtml.indexOf(firstScript) < indexHtml.indexOf(secondScript),
		`${firstScript} should load before ${secondScript}.`
	);
}

function validateEducationData(educationData) {
	assert(educationData.length > 0, 'Education data should not be empty.');

	educationData.forEach(function(item, index) {
		assert(item.title, `Education item ${index} is missing a title.`);
		assert(item.description, `Education item ${index} is missing a description.`);
		assert(item.url, `Education item ${index} is missing a certificate URL.`);
		assert(item.thumbnail, `Education item ${index} is missing a thumbnail.`);
		assertFileExists(item.url, `Education certificate is missing: ${item.url}`);
		assertFileExists(item.thumbnail, `Education thumbnail is missing: ${item.thumbnail}`);
	});
}

function validateReferenceLibraryData(referenceLibraryData) {
	assert(referenceLibraryData.length > 0, 'Reference Library data should not be empty.');

	referenceLibraryData.forEach(function(item, index) {
		assert(item.title, `Reference Library item ${index} is missing a title.`);
		assert(item.url, `Reference Library item ${index} is missing a URL.`);
		assert(Array.isArray(item.tags), `Reference Library item ${index} tags should be an array.`);
		assert(item.tags.length > 0, `Reference Library item ${index} should have at least one tag.`);
		assertFileExists(item.url, `Reference Library document is missing: ${item.url}`);
	});
}

function validatePageStructure(indexHtml) {
	const sectionIds = [
		'home-section',
		'services-section',
		'portfolio-section',
		'education-section',
		'library-section'
	];

	sectionIds.forEach(function(sectionId) {
		assert(hasElementId(indexHtml, sectionId), `Missing section: ${sectionId}`);
	});

	assert(hasElementId(indexHtml, 'education-grid'), 'Missing Education grid.');
	assert(hasElementId(indexHtml, 'grid'), 'Missing Reference Library grid.');
	assert(hasElementId(indexHtml, 'search-criteria'), 'Missing Reference Library search input.');
	assert(hasElementId(indexHtml, 'search-btn'), 'Missing Reference Library search button.');
}

function validateScripts(indexHtml) {
	assert(!/jquery/i.test(indexHtml), 'index.html should not load or reference jQuery.');

	assert(hasScript(indexHtml, 'js/dom-helpers.js'), 'Missing dom-helpers.js script.');
	assert(hasScript(indexHtml, 'js/education.js'), 'Missing education.js script.');
	assert(hasScript(indexHtml, 'js/oca-scripts.js'), 'Missing oca-scripts.js script.');
	assert(hasScript(indexHtml, 'js/bookshelf.js'), 'Missing bookshelf.js script.');
	assertScriptOrder(indexHtml, 'js/dom-helpers.js', 'js/education.js');
	assertScriptOrder(indexHtml, 'js/dom-helpers.js', 'js/bookshelf.js');
}

function validateNavigation(indexHtml) {
	const expectedHashes = [
		'#home-section',
		'#services-section',
		'#portfolio-section',
		'#education-section',
		'#library-section'
	];

	expectedHashes.forEach(function(hash) {
		assert(indexHtml.includes(`href="${hash}"`), `Missing navigation link for ${hash}.`);
	});
}

function runSmokeTest() {
	const indexHtml = readFile('index.html');
	const educationData = readJson('js/education-data.json');
	const referenceLibraryData = readJson('js/reference-library-data.json');

	validatePageStructure(indexHtml);
	validateScripts(indexHtml);
	validateNavigation(indexHtml);
	validateEducationData(educationData);
	validateReferenceLibraryData(referenceLibraryData);

	console.log('Smoke test passed.');
}

runSmokeTest();
