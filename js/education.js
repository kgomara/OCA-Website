/**
 * education.js
 */

document.addEventListener('DOMContentLoaded', function () {
	loadEducationData();
});

function loadEducationData() {
	loadJsonData('js/education-data.json', 'Unable to load Education data.')
		.then(function(educationData) {
			educationData.forEach(function(educationItem) {
				appendEducationItem(educationItem);
			});
		});
}

function appendEducationItem(educationItem) {
	var grid = document.getElementById('education-grid');

	var column = makeElement('div', "col-md-4");

	var heading = makeElement('h4', "", educationItem.title);

	var description = makeElement('p', "", educationItem.description);

	var linkContainer = makeElement('p', "text-center");

	var link = document.createElement('a');
	link.setAttribute('href', educationItem.url);

	var thumbnail = document.createElement('img');
	thumbnail.setAttribute('src', educationItem.thumbnail);
	thumbnail.setAttribute('alt', "");

	if (educationItem.thumbnailWidth) {
		thumbnail.setAttribute('width', educationItem.thumbnailWidth);
	}

	if (educationItem.thumbnailHeight) {
		thumbnail.setAttribute('height', educationItem.thumbnailHeight);
	}

	link.appendChild(thumbnail);
	appendChildren(linkContainer, [link]);
	appendChildren(column, [heading, description, linkContainer]);
	grid.appendChild(column);
}
