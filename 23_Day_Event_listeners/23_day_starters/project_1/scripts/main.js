// get container
const container = document.querySelector('.container')
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.flexDirection = 'column'

// move header
const header = document.querySelector('header')
header.style.display = 'flex'
header.style.alignItems = 'center'
header.style.flexDirection = 'column'
header.style.fontFamily = 'Helvetica'

// fix h1
const h1 = document.querySelector('h1')
h1.style.color = 'mediumSeaGreen'
h1.style.marginBottom = '0px'

// fix subheaders
const subheaders = document.querySelectorAll('.sub-header')
subheaders.forEach((x) => {
    x.style.fontWeight = '400'
    x.style.margin = '0px'
})

// input css
const inputWrapper = document.querySelector('.input-wrapper')
inputWrapper.style.margin = '10px'
inputWrapper.style.marginTop = '25px'

const input = document.querySelector('#number')
input.style.height = '20px'
input.style.width = '300px'
input.style.borderColor = 'mediumSeaGreen'
input.style.borderStyle = 'solid'
input.style.borderWidth = '1px'
input.style.padding = '8px'
input.style.outlineStyle = 'none'

const button = document.querySelector('.gen-button')
button.style.backgroundColor = 'mediumSeaGreen'
button.style.color = 'white'
button.style.padding = '12px'
button.style.marginLeft = '10px'
button.style.border = 'none'

// prepare error message
const errorMessage = document.createElement('p')
errorMessage.style.color = 'tomato'
errorMessage.style.fontFamily = 'Helvetica'
errorMessage.style.fontSize = '12px'
errorMessage.style.margin = '2px'
inputWrapper.prepend(errorMessage)

// button eventlistener
const number = document.querySelector('#number')
button.addEventListener('click', e =>{
    if (validate(number.value.trim())){
        createNumbers(number.value.trim())
    } else {
        console.log('click')
    }
})

// function to validate input
const validate = (number) => {
    if (number.length === 0){
        errorMessage.innerHTML = 'Enter a number to the input field to generate a number'
        return false
    } else if (parseInt(number) > 9999){
        errorMessage.innerHTML = 'Number was too large'
        return false
    } else if (!isNaN(number)){
        errorMessage.innerHTML = ""
        return true
    } else {
        errorMessage.innerHTML = 'Input must be a number'
        return false
    }
}

// function to create numbers
const createNumbers = (numbersLength) => {
    const numberContainer = document.querySelector('.numbers')
    numberContainer.innerHTML = ''
    numberContainer.style.display = 'flex'
    numberContainer.style.flexWrap = 'wrap'
    numberContainer.style.width = '500px'
    numberContainer.style.justifyContent = 'center'
    numberContainer.style.margin = '5px'
    
    for (let i = 0; i< numbersLength; i++){
        const numbers = document.createElement('p')
        numbers.innerHTML = i+1
        numbers.style.backgroundColor = generateColor()
        numbers.style.display = 'flex'
        numbers.style.fontFamily = 'Helvetica'
        numbers.style.fontSize = '24px'
        numbers.style.color = 'White'
        numbers.style.justifyContent = 'center'
        numbers.style.width = '55px'
        numbers.style.margin = '2px'
        numberContainer.append(numbers)
    }
}