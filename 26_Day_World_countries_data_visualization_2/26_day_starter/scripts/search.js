const searchCountries = (event, searchBar, countries, searchByStart) =>{
    // Check for search input becoming empty, refill it
    if (searchBar.value.length === 0 && event.inputType === 'deleteContentBackward'){
        removeCountriesHTML();
        setCountries(sortedCountries);
    // Apply only the filtered country to the page
    } else {
        removeCountriesHTML();
        const filteredCountries = filterCountries(searchBar.value, sortedCountries, searchByStart);
        setCountries(filteredCountries);
    }
}


// Filter input by starting word
const filterCountries = (searchString, countriesArray, searchByStart) => {
    // Change regex search depending on search type
    let re;
    if (searchByStart){
        re = new RegExp(`^${searchString}`, `i`);
    } else {
        re = new RegExp(`${searchString}`, `i`);
    }

    const filteredArray = countriesArray.filter((country) => {
        if (re.test(country)){
            return country;
        } 
    });

    return filteredArray;
}


// Toggle searchbuttons
const toggleSearchButtons = (classlist, offClassList) => {
    classlist.remove('unselected-button');
    classlist.add('selected-button');
    offClassList.remove('selected-button');
    offClassList.add('unselected-button');
}

const updateSearchInfo = (searchString, countriesArray, searchByStart) => {
    const filteredCountries = filterCountries(searchString, sortedCountries, searchByStart);
    const searchInfo = document.querySelector('.search-info');

    // Clear search info when there is no search
    if (searchString === ''){
        searchInfo.innerHTML = '';
        return
    }

    // Update search info with "starting word"
    if (searchByStart) {
        if (filteredCountries.length === 1){
            searchInfo.textContent = `There is ${filteredCountries.length} country that start with "${searchString}".`
            return;
        } else if (filteredCountries.length === 0){
            searchInfo.textContent = `There are no countries that start with "${searchString}".`
            return
        }
        searchInfo.textContent = `There are ${filteredCountries.length} countries that start with "${searchString}".`
    } // Update search info with "containing" 
    else {
        if (filteredCountries.length === 1){
            searchInfo.textContent = `There is ${filteredCountries.length} country that contains "${searchString}".`
            return;
        } else if (filteredCountries.length === 0){
            searchInfo.textContent = `There are no countries that contain "${searchString}".`
            return
        }
        searchInfo.textContent = `There are ${filteredCountries.length} countries that contains "${searchString}".`
    }
}