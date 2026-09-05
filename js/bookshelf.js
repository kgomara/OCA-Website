/**
 * bookshelf.js
 */

document.addEventListener('DOMContentLoaded', function () {
	loadLibraryData();

	document.getElementById('search-btn').addEventListener('click', searchRefs);
	document.getElementById('search-criteria').addEventListener('keydown', function(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			searchRefs();
		}
	});
});

function loadLibraryData() {
	loadJsonData('js/reference-library-data.json', 'Unable to load Reference Library data.')
		.then(function(libraryData) {
			// Sort the library into title order
			libraryData.sort(compareTitles);
			// iterate reference-library-data.json array to load all the documents
			libraryData.forEach(function(referenceEntity) {
				append(referenceEntity.title, referenceEntity.tags, referenceEntity.url);
			});
		});
}

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
	
	var column = makeElement('div', "col-12 col-sm-6 col-lg-3");

	var card = makeElement('div', "card h-100 library-card");

	// Create a card heading object to contain the document title as a link
	var	panelHead = makeElement('div', "card-header");
	// ...create the <a href... anchor and append it to the panel heading div
	panelHead.appendChild(makeHref(url, title));
	// ...append the card heading to the card
	card.appendChild(panelHead);
	
	// Create the card body and set its classes
	var	panelBody = makeElement('div', "card-body");
	// ...create a <ul... of the tags and append it to the panel body div
	panelBody.appendChild(makeUL(tags));
	// ...append the card body to the card
	card.appendChild(panelBody);
	
	// Finally, append the card to the grid container
	appendChildren(column, [card]);
	grid.appendChild(column);
}

function makeHref(url, title) {
	// Create an anchor element
	var aTag = makeElement('a');
	// ...and and href attribute with the url
	aTag.setAttribute('href', url);
	// ...set the link text with the document title
	aTag.textContent = title;
	
	return aTag;
}


function makeUL(array) {
    // Create the list element:
	var list = makeElement('ul', "list-inline");

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
	var searchTerm = document.getElementById('search-criteria').value.toLowerCase();
// 	console.log("search-criteria=" + searchTerm);
	// Iterate over all the card divs
	document.querySelectorAll(".library-card").forEach(function(card) {
		var found = false;
		// Search the titles
		card.querySelectorAll(".card-header").forEach(function(cardHeader) {
			var refTitle = cardHeader.textContent.toLowerCase();
			if (refTitle.indexOf(searchTerm) != -1) {
				// The search term was found in this refTitle, set the found variable true
				found = true;
			}
		});
		// Iterate over the list of tags
		card.querySelectorAll(".card-body ul").forEach(function(tagList) {
			// get a tag in lower case
			var tag = tagList.textContent.toLowerCase();
// 			console.log("tag=" + tag);
			// Use indexOf to determine if the searchTerm is contained with the text of the tag
			if (tag.indexOf(searchTerm) != -1) {
				// The search term was found in this tag, set the found variable true
				found = true;
			}
		});
		// Set the visibility of the containing column based on whether or not the search term was found
		card.closest('.col-12').hidden = !found;
	})
	return false;
}
