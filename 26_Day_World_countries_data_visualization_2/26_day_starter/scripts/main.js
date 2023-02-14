// Import countries into a sortable variable
const sortedCountries = countries;


// Set countries for first load
setCountries(sortedCountries);


// Set subtitle
const subtitle = document.querySelector('.subtitle');
subtitle.textContent = `Total Number of countries: ${sortedCountries.length}`;


// Toggle search type, true searches word for match from start, false searches for match anywhere in word.
const startSearch = document.querySelector('.start-search');
console.log(startSearch)
const anySearch = document.querySelector('.any-search');
startSearch.addEventListener('click', e => {
    searchByStart = true

    // Toggle button css
    const classlist = startSearch.classList;
    const offClassList = anySearch.classList;
    toggleSearchButtons(classlist, offClassList)
})
anySearch.addEventListener('click', e => {
    searchByStart = false;

    // Toggle button css
    const classlist = anySearch.classList;
    const offClassList = startSearch.classList;
    toggleSearchButtons(classlist, offClassList)
})


// Variables to control search
let searchBar = document.querySelector('.country-search');
let searchByStart = true;


// Update search display and info
searchBar.addEventListener('input', event => {
    searchCountries(event, searchBar, sortedCountries, searchByStart)
    updateSearchInfo(searchBar.value, sortedCountries, searchByStart )
})


// Setup sorting eventlisteners
const ascButton = document.querySelector('.sort-a-z');
const descButton = document.querySelector('.sort-z-a');


// Sort countries and toggle button from asc to desc
ascButton.addEventListener('click', e => {
    removeCountriesHTML();
    sortedCountries.reverse();
    searchCountries(e, searchBar, sortedCountries, searchByStart);
    ascButton.style.display = 'none';
    descButton.style.display = 'inline';
})


// Sort countries and toggle button from desc to asc
descButton.addEventListener('click', e => {
    removeCountriesHTML();
    sortedCountries.reverse();
    searchCountries(e, searchBar, sortedCountries, searchByStart);
    descButton.style.display = 'none';
    ascButton.style.display = 'inline';
})

