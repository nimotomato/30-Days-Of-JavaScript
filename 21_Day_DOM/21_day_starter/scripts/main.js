// Header styling
let h1 = document.querySelector('h1')
h1.style.fontFamily = 'verdana'
h1.style.textAlign = 'center'

// Second header style
let h2 = document.querySelector('h2')
h2.style.fontFamily = 'verdana'
h2.style.textAlign = 'center'

// UL style
let ul = document.querySelector('ul')
ul.style.fontFamily = 'verdana'
ul.style.textAlign = 'left'
ul.style.listStyle = 'none'
ul.style.display = 'grid'
ul.style.justifyContent = 'center'

// Padding for list items
let li = document.querySelectorAll('li')
for (let i = 0; i < li.length; i++) {
    li[i].style.padding = '5px'
}

// get year from header
let yearText = document.querySelector('strong')

// get some colors
let colors = [
    'green',
    'blue',
    'red',
    'yellow',
    'orange',
    'magenta',
    'purple',
    'pink'
] 

// set font size
yearText.style.fontSize = '50px';

// pick and set random color every second for year
setInterval(() => {
    let colorsIndex = Math.floor(Math.random() * 9)
    yearText.style.color = colors[colorsIndex]
}, 1000)

// get datetime function
let getDate = () => {
    let d = new Date();
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let monthIndex = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();
    
    date = date < 10? '0'+date.toString(): date;
    hour = hour < 10? '0'+hour.toString(): hour;  
    mins = mins < 10? '0'+mins.toString():mins;
    
    return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
  }

// Create new element and add styling
let paragraph = document.createElement('p');
paragraph.textContent = getDate()
paragraph.style.fontFamily = 'Arial'
paragraph.style.fontSize = '17px'
paragraph.style.display = 'flex'
paragraph.style.justifyContent = 'center'
paragraph.style.alignItems = 'center'
paragraph.style.textAlign = 'center'
paragraph.style.padding = '10px'
paragraph.style.width = '200px';
paragraph.style.margin = '0 auto';

document.querySelector('h2').appendChild(paragraph)

// pick and set random backroundcolor every second for datetime
setInterval(() => {
    let colorsIndex = Math.floor(Math.random() * 9)
    paragraph.style.backgroundColor = colors[colorsIndex]
}, 1000)

// Regex patterns to update colors of list items
let donePattern = /Done/g
let onGoingPattern = /Ongoing/g
let comingPattern = /Coming/g
let listItem = document.querySelectorAll('li')

// Set class depending on regex match
for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].textContent && donePattern.test(listItem[i].textContent)) {
        listItem[i].classList.add('done')
    } else if (listItem[i].textContent && onGoingPattern.test(listItem[i].textContent)) {
        listItem[i].classList.add('ongoing')
    } else{
        listItem[i].classList.add('coming')
    }
}

// Set colors depending on class
let doneList = document.querySelectorAll('.done')
doneList.forEach((x) => x.style.backgroundColor = 'lightGreen')

let ongoingList = document.querySelectorAll('.ongoing')
ongoingList.forEach((x) => x.style.backgroundColor = 'yellow')

let comingList = document.querySelectorAll('.coming')
for (let i = 0; i < comingList.length; i++) {
    comingList[i].style.backgroundColor = 'red'
    console.log(comingList[i])
}