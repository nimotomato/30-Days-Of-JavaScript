// container
let listContainer = document.createElement('div')
document.body.appendChild(listContainer)
listContainer.style.display = 'flex'
listContainer.style.justifyContent = 'center'
listContainer.style.alignItems = 'center'

// wrapper
let listWrapper = document.createElement('div')
listContainer.append(listWrapper)
listWrapper.style.display = 'grid'
listWrapper.style.gridTemplateColumns = '1fr 1fr 1fr'
listWrapper.style.width = '700px'
listWrapper.style.margin = '0px'

// title list
let titles = asabenehChallenges2020.author.titles
let titleList = document.createElement('ul')
titleList.textContent = 'Titles'
titleList.style.fontFamily = 'Helvetica'
titleList.style.fontWeight = 'bold'
titleList.style.listStyle = 'none'
titleList.style.paddingLeft = '0'
listWrapper.append(titleList)

for (let i = 0; i < titles.length; i++){
    let listItem = document.createElement('li')
    listItem.textContent = titles[i].join(" ")
    listItem.style.padding = '3px'
    listItem.style.fontWeight = 'normal'
    listItem.style.fontSize = '14px'
    titleList.append(listItem)
}

// Skills list
let skills = asabenehChallenges2020.author.skills
let skillsList = document.createElement('ul')
skillsList.textContent = 'Skills'
skillsList.style.fontFamily = 'Helvetica'
skillsList.style.fontWeight = 'bold'
skillsList.style.listStyle = 'none'
skillsList.style.paddingLeft = '0'
listWrapper.append(skillsList)

for (let i = 0; i < skills.length; i++){
    let listItem = document.createElement('li')
   
    listItem.innerHTML = '&#9989;' + " " + skills[i]
    listItem.style.padding = '3px'
    listItem.style.fontWeight = 'normal'
    listItem.style.fontSize = '14px'
    skillsList.appendChild(listItem)
}

// Qualifications list
let qualifications = asabenehChallenges2020.author.qualifications
let qualificationsList = document.createElement('ul')
qualificationsList.textContent = 'Qualifications'
qualificationsList.style.fontFamily = 'Helvetica'
qualificationsList.style.fontWeight = 'bold'
qualificationsList.style.listStyle = 'none'
qualificationsList.style.paddingRight = '0'
listWrapper.append(qualificationsList)

// First ungodly fucking item
let firstListItem = document.createElement('li')
firstListItem.innerHTML = '&#128214;' + " " + qualifications[0]
firstListItem.style.padding = '3px'
firstListItem.style.fontWeight = 'normal'
firstListItem.style.fontSize = '14px'
qualificationsList.append(firstListItem)

for (let i = 1; i < qualifications.length; i++){
    let listItem = document.createElement('li')
    listItem.innerHTML = '&#127891;' + " " + qualifications[i]
    listItem.style.padding = '3px'
    listItem.style.fontWeight = 'normal'
    listItem.style.fontSize = '14px'
    qualificationsList.append(listItem)
}
