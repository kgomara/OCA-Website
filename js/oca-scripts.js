/**
 * oca-scripts.js
 */

document.addEventListener('DOMContentLoaded', function () {
	// setup the tab click handlers
	document.querySelector('#home-tab a').addEventListener('click', function(e) {
		e.preventDefault();
		goHome(this);
	});

	document.querySelector('#services-tab a').addEventListener('click', function(e) {
		e.preventDefault();
		goServices(this);
	});
	
	document.querySelector('#portfolio-tab a').addEventListener('click', function(e) {
		e.preventDefault();
		goPortfolio(this);
	});
	
	document.querySelector('#education-tab a').addEventListener('click', function(e) {
		e.preventDefault();
		goEducation(this);
	});

	document.querySelector('#library-tab a').addEventListener('click', function(e) {
		e.preventDefault();
		goLibrary(this);
	});
		
	// setup home page button handlers
	document.querySelector('#home-section #services-btn').addEventListener('click', function(e) {
		e.preventDefault();
		goServices(document.querySelector('#services-tab a'));
	});
	
	document.querySelector('#home-section #portfolio-btn').addEventListener('click', function(e) {
		e.preventDefault();
		goPortfolio(document.querySelector('#portfolio-tab a'));
	});
	
	document.querySelector('#home-section #education-btn').addEventListener('click', function(e) {
		e.preventDefault();
		goEducation(document.querySelector('#education-tab a'));
	});

	showSectionFromHash(window.location.hash);
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

function showSection(sectionId, ele) {
	document.querySelectorAll('#home-section, #services-section, #portfolio-section, #education-section, #library-section').forEach(function(section) {
		section.hidden = section.id !== sectionId;
	});

	document.querySelectorAll('.navbar-content li, .navbar-content a').forEach(function(navElement) {
		navElement.classList.remove('active');
	});

	ele.parentElement.classList.add('active');
	ele.classList.add('active');
	scroll_Top();
}

function showSectionFromHash(hash) {
	if (hash === '#home-section') {
		goHome(document.querySelector('#home-tab a'));
		window.setTimeout(function() {
			window.scrollTo(0, 0);
		}, 600);
	} else if (hash === '#services-section') {
		goServices(document.querySelector('#services-tab a'));
	} else if (hash === '#portfolio-section') {
		goPortfolio(document.querySelector('#portfolio-tab a'));
	} else if (hash === '#education-section') {
		goEducation(document.querySelector('#education-tab a'));
	} else if (hash === '#library-section') {
		goLibrary(document.querySelector('#library-tab a'));
	}
}

/**
 * These function handle the navigation
 * 
 * Each hides all the other sections and shows itself,
 * then removes the '.active' class from all the nav tabs
 * and adds the '.active' class to itself.
 */
var goHome = function(ele) {
	// Update the UI to Home state
	showSection('home-section', ele);
};

var goServices = function(ele) {
	// Update the UI to Services state
	showSection('services-section', ele);
};

var goPortfolio = function(ele) {
	// Update the UI to Portfolio state
	showSection('portfolio-section', ele);
};

var goEducation = function(ele) {
	// Update the UI to Education state
	showSection('education-section', ele);
};

var goLibrary = function(ele) {
	// Update the UI to Library state
	showSection('library-section', ele);
};
