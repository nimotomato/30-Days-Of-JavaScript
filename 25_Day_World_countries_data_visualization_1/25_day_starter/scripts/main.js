// Population eventlistener
populationButton = document.querySelector('.population')
populationButton.addEventListener('click', e => {
    let graphWrapper = document.querySelector('.graph-wrapper');
    setPopTitle()
    graphWrapper.innerHTML = '';
    setPopGraph(populationData);
})

// Languages eventlistener
languagesButton = document.querySelector('.languages')
languagesButton.addEventListener('click', e => {
    let graphWrapper = document.querySelector('.graph-wrapper');
    setLangTitle();
    graphWrapper.innerHTML = '';
    setLangGraph(languageData);
})

