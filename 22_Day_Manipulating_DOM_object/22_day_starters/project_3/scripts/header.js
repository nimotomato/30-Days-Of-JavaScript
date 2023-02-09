// Create header 
let header = document.createElement('header')
document.body.prepend(header)

// Create header children
let title = document.createElement('h2')
title.classList.add('header')
header.append(title)
let strong = document.createElement('strong')

let subtitle = document.createElement('h3')
subtitle.classList.add('header', 'sub-title')
header.append(subtitle)

let dateTime = document.createElement('h3')
dateTime.classList.add('header', 'date-time')
header.append(dateTime)

// Local header CSS
header.style.display = 'flex'
header.style.justifyContent = 'center'
header.style.alignItems = 'center'
header.style.flexDirection = 'column'
let headerTags = document.querySelectorAll('.header')
for (let i = 0; i < headerTags.length; i++){
    headerTags[i].style.fontFamily = 'Helvetica'
}

// Title css
let titleText = asabenehChallenges2020.challengeTitle
let yearText = asabenehChallenges2020.challengeYear
let text = titleText
let strongText = yearText
title.textContent = text
strong.textContent = strongText
strong.style.color = generateColor()
const updateStrong = () =>{
    strong.style.color = generateColor()
}
setInterval(updateStrong, 1000)
strong.style.fontSize = '50px'
title.appendChild(strong)
title.style.marginBottom = '10px'
title.style.paddingBottom = '0px'

// Subtitle
let subtitleText = asabenehChallenges2020.challengeSubtitle
subtitle.textContent = subtitleText
subtitle.style.fontFamily = 'helvetica'
subtitle.style.fontWeight = '200'
subtitle.style.textDecorationLine = 'underline'
subtitle.style.marginBottom = '0px'

// Date and time
dateTime.textContent = getDate()
const updateSeconds = () => {
    dateTime.textContent = getDate()
}
setInterval(updateSeconds, 1000)
dateTime.style.padding = '10px'
dateTime.style.paddingLeft = '20px'
dateTime.style.paddingRight = '20px'
dateTime.style.fontFamily = 'Helvetica'
dateTime.style.fontSize = '12px'
dateTime.style.backgroundColor = 'purple'
const updateBackground = () =>{
    dateTime.style.backgroundColor = generateColor()
}
setInterval(updateBackground, 1000)

