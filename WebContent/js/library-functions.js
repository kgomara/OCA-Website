/**
 * functions.js
 * 
 * Just a tiny bit of JavaScript to handle navigation
 */

$(document).ready(function () {

	// Sort the library into title order
	libraryData.sort(compareTitles);
	// iterate library.js array to load all the documents
	libraryData.forEach(function(referenceEntity) {
		append(referenceEntity.title, referenceEntity.tags, referenceEntity.url);
	});
	
	console.log("References in library = " + libraryData.length);
	
});

function compareTitles(a, b) {
	if (a.title.toLowerCase() < b.title.toLowerCase())
		return -1;
	if (a.title.toLowerCase() > b.title.toLowerCase())
		return 1;
	return 0;
}

function append(title, tags, url) {
	// Get the div that is the grid container
	var grid = document.getElementById('grid');
	
	// Create a panel - see twitter Bootstrap http://getbootstrap.com/components/#panels
	var panel = document.createElement('div');
	// ...set classes on the panel div 
	panel.className ="panel panel-default pull-left col-md-3 col-sm-5 col-xs-12";

	// Create a panel heading object to contain the document title as a link
	var	panelHead = document.createElement('div');
	panelHead.className = "panel-heading";
	// ...create the <a href... anchor and append it to the panel heading div
	panelHead.appendChild(makeHref(url, title));
	// ...append the panel heading to the panel
	panel.appendChild(panelHead);
	
	// Create the panel body and set it's classes
	var	panelBody = document.createElement('div');
	panelBody.className = "panel-body";
	// ...create a <ul... of the tags and append it to the panel body div
	panelBody.appendChild(makeUL(tags));
	// ...append the panel body to the panel
	panel.appendChild(panelBody);
	
	// Finally, append the panel to the grid container
	grid.appendChild(panel);
}

function makeHref(url, title) {
	// Create an anchor element
	var aTag = document.createElement('a');
	// ...and and href attribute with the url
	aTag.setAttribute('href', url);
	// ...set the link text with the document title
	aTag.innerHTML = title;
	
	return aTag;
}


function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');
    // ...set the classes - list-inline is bootstrap class that will layout the list elements horizontally
    list.className = "list-inline";

	// iterate of the array of tags and create <li> elements for each
    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        // ...set its contents
        item.appendChild(document.createTextNode(array[i]));
        // ...append it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

function searchRefs() {
	// Get the search criteria in lower case
	var searchTerm = $("#search-criteria").val().toLowerCase();
// 	console.log("search-criteria=" + searchTerm);
	// Iterate over all the panel divs
	$(".panel").each(function() {
		var found = false;
		// Search the titles
		$(this).find(".panel-heading").each(function() {
			var refTitle = $(this).text().toLowerCase();
			if (refTitle.indexOf(searchTerm) != -1) {
				// The search term was found in this refTitle, set the found variable true
				found = true;
				// ...and return from this function
				return false;
			}
		});
		// Iterate over the list of tags
		$(this).find(".panel-body ul").each(function() {
			// get a tag in lower case
			var tag = $(this).text().toLowerCase();
// 			console.log("tag=" + tag);
			// Use indexOf to determine if the searchTerm is contained with the text of the tag
			if (tag.indexOf(searchTerm) != -1) {
				// The search term was found in this tag, set the found variable true
				found = true;
				// ...and return from this function
				return false;
			}
		});
		// Set the visibility of the containing panel based on whether or not the search term was found in the list of tags
		$(this).closest('.panel')[found ? 'show' : 'hide']();
	})
	return false;
}

