/**
 * dom-helpers.js
 */

function loadJsonData(url, errorMessage) {
	return fetch(url)
		.then(function(response) {
			if (!response.ok) {
				throw new Error(errorMessage);
			}
			return response.json();
		})
		.catch(function(error) {
			console.error(error);
			return [];
		});
}

function makeElement(tagName, className, textContent) {
	var element = document.createElement(tagName);

	if (className) {
		element.className = className;
	}

	if (textContent) {
		element.textContent = textContent;
	}

	return element;
}

function appendChildren(parent, children) {
	children.forEach(function(child) {
		parent.appendChild(child);
	});
}
