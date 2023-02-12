// Set languages title
const setLangTitle = () => {
    let title = document.querySelector('.graph-title');
    let langTitle = "10 Most spoken languages in the world";
    title.textContent = langTitle;
}


// Set graph
const setLangGraph = (languageData) => {
    // Get tag where graph is placed to use for placing of graph
    let graphWrapper = document.querySelector('.graph-wrapper')

    // Create rows separated by divs
    languageData
        .map((item) => {
            // Create a new div to hold all items to control placing of items
            let itemContainer = document.createElement('div')
            itemContainer.className = 'item-wrapper'
            graphWrapper.append(itemContainer)

            // Create the rows
            let language = document.createElement('p')
            language.textContent = item.language
            language.classList = ('item-language')

            let percentage = document.createElement('p')
            percentage.setAttribute('value', item.percentage)
            percentage.classList = ('item-percentage')
            percentage.style.width = `${item.percentage * 55}vw `;

            let number = document.createElement('p')
            number.textContent = item.number
            number.classList = ('item-number')

            itemContainer.appendChild(language)
            itemContainer.appendChild(percentage)
            itemContainer.appendChild(number)
        })

}