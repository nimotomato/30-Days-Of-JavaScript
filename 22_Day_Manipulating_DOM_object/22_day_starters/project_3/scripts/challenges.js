// create container
let container = document.createElement('div')
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
document.body.appendChild(container)

// create wrapper
let wrapper = document.createElement('div')

container.append(wrapper)

// get data
const challenges = asabenehChallenges2020.challenges


//PARAGRAPH
// create paragraphs for every challenge
let challengeParagraph;
for (let i = 0; i<challenges.length; i++){
    challengeParagraph = document.createElement('div')

    // paragraph/container css
    challengeParagraph.className = `challenge-${i + 1}`
    challengeParagraph.style.display = 'grid'
    challengeParagraph.style.gridTemplate = 'auto / 215px 200px 180px'
    challengeParagraph.style.width = '600px'
    challengeParagraph.style.margin = '2px'
    if (challenges[i].status === 'Done'){
        challengeParagraph.style.backgroundColor = 'mediumSeaGreen'
    } else if (challenges[i].status === 'Ongoing'){
        challengeParagraph.style.backgroundColor = '#f0d43a'
    } else {
        challengeParagraph.style.backgroundColor = 'tomato'
    }

    wrapper.append(challengeParagraph)
}

// CONTENT
// append name for every challenge
let challengeName
for (let i = 0; i < challenges.length; i++){
    challengeName = document.createElement('p')
    challengeName.textContent = challenges[i].name

    // css
    challengeName.style.fontFamily = 'Helvetica'
    challengeName.style.fontSize = '14px'
    challengeName.style.paddingLeft = '15px'

    // get correct paragraph
    document.querySelector(`.challenge-${i + 1}`).appendChild(challengeName)
}

// append details for every challenge
for (let i = 0; i < challenges.length; i++){
    // setup tags
    let detailsWrapper = document.createElement('p')
    let details = document.createElement('details')
    let summary = document.createElement('summary')

    // use substring to find summary title
    let pattern = '30 Days Of ';
    let summaryName = challenges[i].name.substring(pattern.length)

    // Wrapper css
    detailsWrapper.style.paddingLeft = '15px'

    // set summary text & CSS
    summary.textContent = summaryName
    summary.style.fontFamily = 'Helvetica'
    summary.style.fontSize = '14px'

    
    // add topics list & CSS
    let ul = document.createElement('ul')
    ul.style.listStyle = 'none'
    ul.style.marginLeft = '-30px'
    ul.style.marginTop = '10px'
    ul.style.marginBottom = '5px'
    details.appendChild(ul)

    // list items & CSS
    challenges[i].topics.forEach((topic) => {
        let li = document.createElement('li')

        //topics css
        li.textContent = topic
        
        li.style.itemAlign = 'center'
        li.style.fontFamily = 'Helvetica'
        li.style.fontSize = '14px'
        li.style.margin = '5px'

        // append
        ul.appendChild(li)
    })

    // get correct paragraph and append tag
    document.querySelector(`.challenge-${i + 1}`).appendChild(detailsWrapper)
    detailsWrapper.appendChild(details)
    details.appendChild(summary)
}

// append status for every challenge
for (let i = 0; i < challenges.length; i++){
    let challengeStatus = document.createElement('p')
    challengeStatus.textContent = challenges[i].status

    // css
    challengeStatus.style.textAlign = 'right'
    challengeStatus.style.paddingRight = '15px'

    document.querySelector(`.challenge-${i + 1}`).appendChild(challengeStatus)
}