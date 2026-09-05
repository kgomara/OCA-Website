/**
 * education.js
 */

document.addEventListener('DOMContentLoaded', function () {
	loadEducationData();
});

function loadEducationData() {
	fetch('js/education-data.json')
		.then(function(response) {
			if (!response.ok) {
				throw new Error('Unable to load Education data.');
			}
			return response.json();
		})
		.then(function(educationData) {
			educationData.forEach(function(educationItem) {
				appendEducationItem(educationItem);
			});
		})
		.catch(function(error) {
			console.error(error);
		});
}

function appendEducationItem(educationItem) {
	var grid = document.getElementById('education-grid');

	var column = document.createElement('div');
	column.className = "col-md-4";

	var heading = document.createElement('h4');
	heading.textContent = educationItem.title;

	var description = document.createElement('p');
	description.textContent = educationItem.description;

	var linkContainer = document.createElement('p');
	linkContainer.className = "text-center";

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
	linkContainer.appendChild(link);
	column.appendChild(heading);
	column.appendChild(description);
	column.appendChild(linkContainer);
	grid.appendChild(column);
}
