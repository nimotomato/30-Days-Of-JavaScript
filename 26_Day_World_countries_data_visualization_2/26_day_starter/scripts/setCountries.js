const setCountries = (countries) => {
    countries.map((country) => {
        let countryContainer = document.createElement('p');
        countryContainer.classList = 'country-container';
        countryContainer.textContent = country;
        let countriesContainer = document.querySelector('.countries-cointainer');
        countriesContainer.appendChild(countryContainer);
    })
}


const removeCountriesHTML = () => {
    let countriesContainer = document.querySelector('.countries-cointainer');
    countriesContainer.innerHTML = '';
}