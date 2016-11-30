/**
 * functions.js
 * 
 * Just a tiny bit of JavaScript to handle navigation
 */

$(document).ready(function () {
	// setup the tab click handlers
/*
	$('#home-tab a').click(function(e) {
		e.preventDefault();
		goHome(this);
	});

	$('#services-tab a').click(function(e) {
		e.preventDefault();
		goServices(this);
	});
	
	$('#portfolio-tab a').click(function(e) {
		e.preventDefault();
		goPortfolio(this);
	});
	
	$('#about-tab a').click(function(e) {
		e.preventDefault();
		goAbout(this);
	});
		
	// setup home page button handlers
	$('#home-section #services-btn').click(function(e) {
		e.preventDefault();
		goServices($('#services-tab a'));
	});
	
	$('#home-section #portfolio-btn').click(function(e) {
		e.preventDefault();
		goPortfolio($('#portfolio-tab a'));
	});
	
	$('#home-section #about-btn').click(function(e) {
		e.preventDefault();
		goAbout($('#about-tab a'));
	});
	
	// handle the link on the services page --> about
	$('#services-section .hero-unit a').click(function(e) {
		e.preventDefault();
		goAbout($('#about-tab a'));		
	});
*/
});

function append(title, description) {
	var grid = document.querySelector('#columns');
	var item = document.createElement('div');
	var h = '<div class="panel panel-primary">';
		h += '<div class="panel-heading">';
		h += title;
		h += '</div>';
		h += '<div class="panel-body">';
		h += description;
		h += '</div>';
		h += '</div>';
	salvattore['append_elements'](grid, [item])
	item.outerHTML = h;
}

	$(libraryData).each(function(title, description){
		append(title, description);
	});

/**
 * These function handle the navigation
 * 
 * Each hides all the other sections and shows itself,
 * then removes the '.active' class from all the nav tabs
 * and adds the '.active' class to itself.
 */
/*
var goHome = function(ele) {
	// Update the UI to Home state
	$('#portfolio-section').hide('slow');
	$('#about-section').hide('slow');
	$('#services-section').hide('slow');
	$('#home-section').show('slow');
	$('.navbar-content li').removeClass('active');
	$(ele).parent().addClass('active');
};

var goServices = function(ele) {
	// Update the UI to Services state
	$('#home-section').hide('slow');
	$('#portfolio-section').hide('slow');
	$('#about-section').hide('slow');
	$('#services-section').show('slow');
	$('.navbar-content li').removeClass('active');
	$(ele).parent().addClass('active');		
};

var goPortfolio = function(ele) {
	// Update the UI to Portfolio state
	$('#home-section').hide('slow');
	$('#about-section').hide('slow');
	$('#services-section').hide('slow');
	$('#portfolio-section').show('slow');
	$('.navbar-content li').removeClass('active');
	$(ele).parent().addClass('active');	
};

var goAbout = function(ele) {
	// Update the UI to About state
	$('#home-section').hide('slow');
	$('#services-section').hide('slow');
	$('#portfolio-section').hide('slow');
	$('#about-section').show('slow');
	$('.navbar-content li').removeClass('active');
	$(ele).parent().addClass('active');		
};
*/

