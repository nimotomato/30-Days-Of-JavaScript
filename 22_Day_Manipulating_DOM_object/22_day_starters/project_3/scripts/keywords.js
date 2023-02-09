// Container for keywords 
let keyWordsContainer = document.createElement('div')
document.body.append(keyWordsContainer)
keyWordsContainer.style.display = 'grid'
keyWordsContainer.style.justifyContent = 'center'


// Wrapper for keywords header
let keyHeaderWrapper = document.createElement('div')
keyWordsContainer.append(keyHeaderWrapper)
keyHeaderWrapper.style.marginBottom = '-10px'

// Wrapper for the keywords
let keywordsWrapper = document.createElement('div')
keyWordsContainer.append(keywordsWrapper)
keywordsWrapper.style.display = 'flex'
keywordsWrapper.style.flexWrap = 'wrap';
keywordsWrapper.style.justifyContent = 'center'
keywordsWrapper.style.width = '600px'
keywordsWrapper.style.marginBottom = '35px'

// Create h3 for keywords
let keyHeader = document.createElement('h3')
keyHeaderWrapper.append(keyHeader)
keyHeader.textContent = 'Keywords'
keyHeader.style.fontFamily = 'Helvetica'
keyHeader.style.fontSize = '18px'
keyHeader.style.marginLeft = '-15px'

// Get keywords
let keywords = asabenehChallenges2020.keywords.map((x) => {
    return "# " + x
})

// Create a bunch of links for the keywords
for (let i = 0; i < keywords.length; i++){
    let keyItem = document.createElement('a')
    let twitterlink = `https://twitter.com/hashtag/${keywords[i].replace("#","")}`
    keyItem.setAttribute("href", twitterlink)
    keyItem.textContent = keywords[i]
    keyItem.style.textDecoration = 'none'
    keyItem.style.fontFamily = 'Helvetica'
    keyItem.style.fontSize = '14px'
    keyItem.style.color = 'black'
    keyItem.style.backgroundColor = generateColor()
    keyItem.style.borderRadius = '20px'
    keyItem.style.padding = "4px"
    keyItem.style.paddingLeft = "8px"
    keyItem.style.paddingRight = "8px"
    keyItem.style.margin = "2px"
    keyItem.style.fontStyle = "oblique"
    keyItem.style.fontWeight = "550"
    keywordsWrapper.append(keyItem)
}