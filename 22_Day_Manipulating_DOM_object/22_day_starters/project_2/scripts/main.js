// Header info
let header = document.querySelector('header')

let h2 = document.querySelector('h2')
h2.style.display = 'flex'
h2.style.justifyContent = 'center'
let content = h2.textContent.toUpperCase()
console.log(content)
h2.textContent = content
h2.style.alignItems = 'center'
h2.style.fontFamily = 'Helvetica'
h2.style.fontSize = '40px'
h2.style.letterSpacing = '5px'
h2.style.marginBottom = '0'

let countriesCounter = document.querySelector('#total-countries')
countriesCounter.textContent = 'Total Number of countries: ' + countries.length
countriesCounter.style.display = 'flex'
countriesCounter.style.justifyContent = 'center'
countriesCounter.style.alignItems = 'center'
countriesCounter.style.fontFamily = 'Helvetica'
countriesCounter.style.fontSize = '20px'
countriesCounter.style.margin = '0px'

let h3 = document.querySelectorAll('h3')
for (let i = 0; i < h3.length; i++){
    h3[i].style.display = 'flex'
    h3[i].style.justifyContent = 'center'
    h3[i].style.alignItems = 'center'
    h3[i].style.fontFamily = 'Helvetica'
    h3[i].style.fontSize = '15px'
    h3[i].style.fontWeight = '100'
    h3[i].style.margin = '0px'
}
h3[h3.length-1].style.marginBottom = '50px'


// Main content
let container = document.querySelector('.countries-container')
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'

let wrapper = document.querySelector('.countries-wrapper')
wrapper.style.display = 'grid'
wrapper.style.gridTemplateColumns = 'repeat( 6, 1fr)'
wrapper.style.marginInline = '200px auto'
wrapper.style.margin = '0 auto';

// countryBox  creation
let countryBox;
for (let i = 0; i < countries.length; i++){
    countryBox = document.createElement('p')
    countryBox.textContent = countries[i].toUpperCase()
    countryBox.style.borderStyle = 'solid'
    countryBox.style.borderRadius = '5px'
    countryBox.style.borderWidth = 'thin'
    countryBox.style.borderColor = 'white'
    countryBox.style.boxShadow = '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 3px 0 rgba(0, 0, 255, 0.2)'
    countryBox.style.width = '100px'
    countryBox.style.height = '100px'
    countryBox.style.padding = '5px'
    countryBox.style.margin = '5px'
    countryBox.style.display = 'flex'
    countryBox.style.justifyContent = 'center'
    countryBox.style.alignItems = 'center'
    countryBox.style.textAlign = 'center'
    countryBox.style.fontFamily = 'Helvetica'
    countryBox.style.fontSize = '12px'
    countryBox.style.fontWeight = '600'
    wrapper.appendChild(countryBox)
}