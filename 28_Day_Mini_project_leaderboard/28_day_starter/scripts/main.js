// Set global ID-counter we might need
let globalIdCounter = 0;

// Add eventlistener for add player button
const addButton = document.querySelector('.add-player-button');
addButton.addEventListener('click', e => {
    // Clear previous errors
    clearErrors();
    // Get input
    const inputNodes = document.querySelectorAll('input');
    if (inputValidation(inputNodes) === 1) {
        allFieldsError();
    } else if (inputValidation(inputNodes) === 2) {
        scoreNaNError();
    } else {
        const firstName = inputNodes[0].value
        const lastName = inputNodes[1].value
        const country = inputNodes[2].value
        const score = Number(inputNodes[3].value)
        addToLeaderboard(firstName, lastName, country, score)
        inputNodes.forEach((x) => x.value = "")
        sortLeaderBoard()
    }
})

addToLeaderboard("Martin","Agnesse","Denmark", 89);
addToLeaderboard("Kajs","Kojs","Denmark", 99);
addToLeaderboard("Bror","Kojs","Denmark", 109);
addToLeaderboard("Syster","Kojs","Denmark", 75);
addToLeaderboard("Mor","Kojs","Denmark", 80);

sortLeaderBoard()
