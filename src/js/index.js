function toggleTheme() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;

    if (themeSwitcher.checked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}
// get search bar and filter dropdowns
const searchBar = document.querySelector('.search-bar input[type="text"]');
const locationDropdown = document.querySelector('.filter-box select:nth-of-type(1)');
const categoryDropdown = document.querySelector('.filter-box select:nth-of-type(2)');
const experienceDropdown = document.querySelector('.filter-box select:nth-of-type(3)');

// get job listings table and rows
const jobListingsTable = document.querySelector('table');
const jobListingsRows = jobListingsTable.querySelectorAll('tbody tr');

// add event listeners to search bar and filter dropdowns
searchBar.addEventListener('keyup', filterJobListings);
locationDropdown.addEventListener('change', filterJobListings);
categoryDropdown.addEventListener('change', filterJobListings);
experienceDropdown.addEventListener('change', filterJobListings);

function filterJobListings() {
const searchText = searchBar.value.toLowerCase();
const locationFilter = locationDropdown.value.toLowerCase();
const categoryFilter = categoryDropdown.value.toLowerCase();
const experienceFilter = experienceDropdown.value.toLowerCase();

// loop through each job listing row
jobListingsRows.forEach(row => {
const jobTitle = row.querySelector('td:nth-of-type(1)').textContent.toLowerCase();
const location = row.querySelector('td:nth-of-type(2)').textContent.toLowerCase();
const category = row.querySelector('td:nth-of-type(3)').textContent.toLowerCase();
const experience = row.querySelector('td:nth-of-type(4)').textContent.toLowerCase();

// hide row if it doesn't match the search and filter criteria
if (!jobTitle.includes(searchText)
  || (locationFilter !== '' && location !== locationFilter)
  || (categoryFilter !== '' && category !== categoryFilter)
  || (experienceFilter !== '' && experience !== experienceFilter)) {
  row.style.display = 'none';
} else {
  row.style.display = '';
}
});
}