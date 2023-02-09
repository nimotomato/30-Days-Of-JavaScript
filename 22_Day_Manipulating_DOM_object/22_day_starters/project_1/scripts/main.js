// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

let colors = [
    'green',
    'blue',
    'red',
    'yellow',
    'orange',
    'magenta',
    'purple',
    'pink',
    'cyan'
] 
const generateColor = () => {
    let colorsIndex = Math.floor(Math.random() * 9)
    return colors[colorsIndex]
}


let h1 = document.querySelector('h1')
h1.style.display = 'flex'
h1.style.justifyContent = 'center'

let h2 = document.querySelector('h2')
h2.style.display = 'flex'
h2.style.justifyContent = 'center'

let h3 = document.querySelector('h3')
h3.style.display = 'flex'
h3.style.justifyContent = 'center'

let parent = document.querySelector('.parent')
parent.style.display = 'flex'
parent.style.justifyContent = 'center'
parent.style.alignItems = 'center'


let div = document.querySelector('.wrapper')
div.style.display = 'grid'
div.style.gridTemplateColumns = 'repeat(6, 1fr)'
div.style.marginInline = '200px auto'
div.style.margin = '0 auto';

let numbers;

for (let i = 0; i < 102; i++){
    numbers = document.createElement('p')
    numbers.className = 'number'
    numbers.textContent = i
    numbers.style.fontSize = '24x'
    numbers.style.display = 'flex'
    numbers.style.alignItems = 'center'
    numbers.style.justifyContent = 'center'
    numbers.style.backgroundColor = generateColor()
    numbers.style.padding = '15px'
    numbers.style.margin = '2px'
    numbers.style.width = '100px'
    numbers.style.height = '100px'
    div.appendChild(numbers)
}

