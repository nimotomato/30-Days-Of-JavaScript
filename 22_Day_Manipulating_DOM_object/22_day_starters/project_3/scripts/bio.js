// container div
let titleContainer = document.createElement('div')
document.body.appendChild(titleContainer)

// container css
titleContainer.style.display = 'flex'
titleContainer.style.flexDirection = 'column'
titleContainer.style.justifyContent = 'center'
titleContainer.style.alignItems = 'center'
titleContainer.style.paddingBottom = '15px'

// wrapper name
let nameWrapper = document.createElement('div')
titleContainer.append(nameWrapper)

// wrapper icons
let iconWrapper = document.createElement('div')
titleContainer.append(iconWrapper)

// wrapper description
let descWrapper = document.createElement('div')
titleContainer.append(descWrapper)

// name header
let nameHeader = document.createElement('h2')
let firstName = asabenehChallenges2020.author.firstName
let lastName = asabenehChallenges2020.author.lastName
nameHeader.textContent = firstName + " " + lastName

// css for title/name
nameHeader.style.fontFamily = 'Helvetica'
nameHeader.style.fontSize = '20px'
nameHeader.style.marginBottom = '5px'
nameWrapper.append(nameHeader)

// extract links and social name
let links = Object.entries(asabenehChallenges2020.author.socialLinks)
    .filter((x) => x[1].fontawesomeIcon)
    .map((x) => ({
        social: x[1].social,
        icon: x[1].fontawesomeIcon,
        url: x[1].url
    }))

// set links
for (let i = 0; i < links.length; i++){
    let link = document.createElement('a')
    //link.setAttribute('href', links[i].url)
    link.className = links[i].icon.split('"')[1].replace("fab", "fa")
    link.setAttribute('href', links[i].url)

    // css
    link.style.textDecoration = 'none'
    link.style.color = 'black'
    link.style.padding = '2px'
    link.style.fontSize = '24px'

    iconWrapper.append(link)
}

// set description text
let bio = asabenehChallenges2020.author.bio
let bioDesc = document.createElement('p')
bioDesc.textContent = bio

descWrapper.append(bioDesc)

// description CSS
bioDesc.style.fontFamily = 'Helvetica'
bioDesc.style.fontSize = '12px'
bioDesc.style.width = '550px'
bioDesc.style.textAlign = 'center'
bioDesc.style.paddingTop = '15px'