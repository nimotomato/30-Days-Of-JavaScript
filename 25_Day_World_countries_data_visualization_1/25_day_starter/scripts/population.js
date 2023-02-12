// Set population title
const setPopTitle = () => {
    let title = document.querySelector('.graph-title');
    let popTitle = "10 Most populated countries in the world";
    title.textContent = popTitle;
}


// Set graph
const setPopGraph = (populationData) => {
    // Get tag where graph is placed to use for placing of graph
    let graphWrapper = document.querySelector('.graph-wrapper')

    // Create rows separated by divs
    populationData
        .map((item) => {
            // Create a new div to hold all items to control placing of items
            let itemContainer = document.createElement('div')
            itemContainer.className = 'item-wrapper'
            graphWrapper.append(itemContainer)

            // Create the rows
            let country = document.createElement('p');
            country.textContent = item.name;
            country.classList = ('item-id');

            let percentage = document.createElement('p');
            percentage.setAttribute('value', item.percentage);
            percentage.style.width = `${item.percentage * 25}vw `;
            percentage.classList = ('item-percentage');

            let count = document.createElement('p');
            count.textContent = item.population;
            count.classList = ('item-count');

            itemContainer.appendChild(country);
            itemContainer.appendChild(percentage);
            itemContainer.appendChild(count);
        })
}