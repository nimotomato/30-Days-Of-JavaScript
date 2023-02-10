// Declare constants
const celestials = [
    {"earth": 1},
    {"jupiter": 2.34},
    {"mars": 0.38},
    {"mercury": 0.38},
    {"moon": 0.167},
    {"neptune": 1.19},
    {"pluto": 0.06},
    {"saturn": 1.06},
    {"uranus": 0.92},
    {"venus": 0.91}
];

const massInput = document.querySelector('#mass');
const selector = document.querySelector('.select-planet');
const button = document.querySelector('button');

// Add awesome background
document.body.style.backgroundImage = "url('./images/galaxy.gif')";
document.body.style.fontFamily = 'Montserrat';

// Input container css
const inputContainer = document.querySelector('.flex-container-input');
inputContainer.style.display = 'flex';
inputContainer.style.justifyContent = 'center';
inputContainer.style.marginTop = '70px';
inputContainer.style.marginBottom = '0px';
inputContainer.style.gap = '8px';
inputContainer.style.height = '40px';

// Input css
massInput.style.width = '200px'
massInput.style.height = '35px'
massInput.style.textIndent = '5px'
massInput.style.color = 'black'
selector.style.textIndent = '10px'
selector.style.width = '170px'
selector.style.textTransform = 'uppercase'
selector.style.color = 'gray'
button.style.width = '140px'
button.style.height = '40px'
button.style.backgroundColor = 'gray'
button.style.color = 'white'
button.style.borderRadius = '10px'


// Title css
const title = document.querySelector('h1');
title.style.display = 'flex';
title.style.justifyContent = 'center';
title.style.color = 'white';

// Image container css
const main = document.querySelector('main')
main.style.display = 'flex';
main.style.justifyContent = 'center';

const imageContainer = document.querySelector('.flex-container-image');
imageContainer.style.backgroundColor = 'rgba(47, 79, 79, 0.5';
imageContainer.style.display = 'flex';
imageContainer.style.justifyContent = 'center';
imageContainer.style.alignItems = 'center';
imageContainer.style.padding = '60px';
imageContainer.style.margin = '10px';
imageContainer.style.width = '70vw';

// Create image
setImage()
// Create full description
fullDescrip()

// applies descripton
const applyDescription = () => {
    imageContainer.appendChild(description)
    description.appendChild(descTitle);
    description.appendChild(ball);
}

// Generate options in dropdown thing
celestials.forEach((x) => {
    const option = document.createElement('option');
    const name = Object.keys(x)
    option.setAttribute("value", name);
    option.innerHTML = name;
    selector.append(option)
})

// Needed variables for functions
let mass;
let gValue;
let selectedCelestial;

// Add eventlistener for mass
massInput.addEventListener('input', e => {
    mass = massInput.value;
})

// Add eventlistener for selector, get g-value
selector.addEventListener('input', e => {
    gValue = celestials
        .filter((x) => Object.keys(x) == selector.value)
        .map((x) => Object.values(x)
    )
    selectedCelestial = selector.value;
})

// Make button do work
button.addEventListener('click', e => {
    console.log(selectedCelestial)
    if (validInput() === 2){
        imageContainer.innerHTML = '';
        getPlanetError();
    } else if (validInput() === 1){
        imageContainer.innerHTML = '';
        getMassError();
    } else if (validInput() === 0) {
        imageContainer.innerHTML = '';
        setImage(selectedCelestial)
        updateDescription(mass, gValue)
    }     
})

// Update description
const updateDescription = (mass, gValue) => {
    let result = round(mass * gValue)
    applyDescription()
    descTitle.textContent = `The weight of the object on `;
    descStrong.textContent = `${selectedCelestial.toUpperCase()}`;
    descTitle.appendChild(descStrong);
    ball.innerHTML = `${result} N`;
}

// Validate input
const validInput = () => {
    if (mass === undefined || mass == 0 || isNaN(mass)){
        // if null
        return 1
    } else if (selectedCelestial === "default" || selectedCelestial === undefined){
        // not a number
        return 2
    } else if (!isNaN(mass)){
        // if number
        return 0
    }   
}


const round = (value) => {
    return Number(Math.round(value+'e'+2)+'e-'+2);
   }   
