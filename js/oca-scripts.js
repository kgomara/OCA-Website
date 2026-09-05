/**
 * oca-scripts.js
 */

document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.navbar-content a[href^="#"], #home-section a[href^="#"]').forEach(function(link) {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			showSectionFromHash(this.hash, true);
			closeMenu();
		});
	});

	window.addEventListener('hashchange', function() {
		showSectionFromHash(window.location.hash, false);
	});

	showSectionFromHash(window.location.hash, false);
});

/**
 * Helper functions
 */
function scroll_Top() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

function showSection(sectionId, ele, shouldScroll) {
	document.querySelectorAll('#home-section, #services-section, #portfolio-section, #education-section, #library-section').forEach(function(section) {
		section.hidden = section.id !== sectionId;
	});

	document.querySelectorAll('.navbar-content li, .navbar-content a').forEach(function(navElement) {
		navElement.classList.remove('active');
	});

	ele.parentElement.classList.add('active');
	ele.classList.add('active');

	if (shouldScroll) {
		scroll_Top();
	}
}

function showSectionFromHash(hash, updateHash) {
	var sectionHash = getSectionHash(hash);
	var sectionId = sectionHash.substring(1);
	var activeLink = getNavLink(sectionHash);

	showSection(sectionId, activeLink, updateHash);

	if (updateHash && window.location.hash !== sectionHash) {
		history.pushState(null, '', sectionHash);
	}
}

function getSectionHash(hash) {
	var sectionId = hash.substring(1);

	if (document.getElementById(sectionId)) {
		return hash;
	}

	return '#home-section';
}

function getNavLink(sectionHash) {
	var navLinks = Array.prototype.slice.call(document.querySelectorAll('.navbar-content a[href^="#"]'));

	return navLinks.find(function(link) {
		return link.getAttribute('href') === sectionHash;
	});
}

function closeMenu() {
	var menuButton = document.querySelector('.menu-button');

	if (!menuButton || !window.bootstrap) {
		return;
	}

	var dropdown = bootstrap.Dropdown.getOrCreateInstance(menuButton);

	if (dropdown) {
		dropdown.hide();
	}
}
