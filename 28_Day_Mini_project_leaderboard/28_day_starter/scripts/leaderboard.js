// Create cardclass
class LeaderboardCard {
    constructor(firstName, lastName, country, score){
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.score = score
        this.id = function() {
            globalIdCounter += 1;
            return globalIdCounter;
        }
    }

    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    get getCountry() {
        return this.country;
    }

    get getScore() {
        return this.score;
    }

    get getId() {
        return this.id();
    }

    incrementScore() {
        this.score += 5;
    }

    decrementScore() {
        this.score -= 5;
    }
}

// Update leaderboard with new card
const addToLeaderboard = (firstName, lastName, country, score) => {
    // Create leaderboard new leaderboard object from input
    const obj = new LeaderboardCard(firstName, lastName, country, score);
    const nameInfo = obj.getFirstName + " " + obj.getLastName;
    const countryInfo = obj.getCountry;
    const scoreInfo = obj.getScore;
    const objId = obj.getId;

    // Create new card container
    const cardContainer = document.createElement('div');
    cardContainer.classList = "card-container";

    // Create new card
    // subdiv for name and time
    const subDiv = document.createElement('div');
    subDiv.classList = "subdiv"
    const cardName = document.createElement('p');
    cardName.classList = 'card-name';
    cardName.innerHTML = nameInfo;
    const dateTime = document.createElement('p');
    dateTime.classList = 'date';
    dateTime.innerHTML = new Date().toLocaleString();
    subDiv.append(cardName);
    subDiv.append(dateTime);

    const cardCountry = document.createElement('p');
    cardCountry.classList = 'card-country';
    cardCountry.innerHTML = countryInfo;

    const cardScore = document.createElement('p');
    cardScore.classList = 'card-score';
    cardScore.innerHTML = Number(scoreInfo);
    
    // Add button container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList = 'card-buttons'
    // Add buttons
    const deleteButton = document.createElement('i');
    deleteButton.classList = "fa-regular fa-trash-can";
    // Dunno why but this needs to be here or the trashcan is not placed correctly
    deleteButton.style.display = 'flex';
    deleteButton.style.justifyContent = 'center';
    deleteButton.style.alignItems = 'center';
    buttonContainer.appendChild(deleteButton);
    removeCardEvent(deleteButton, cardContainer);

    const incrementButton = document.createElement('p');
    incrementButton.innerHTML = '+5';
    incrementButton.classList = "increment-button";
    buttonContainer.appendChild(incrementButton);
    incrementScoreEvent(incrementButton, cardContainer, obj, cardScore);
    
    const decrementButton = document.createElement('p');
    decrementButton.innerHTML = '-5';
    decrementButton.classList = "decrement-button";
    buttonContainer.appendChild(decrementButton);
    decrementScoreEvent(decrementButton, cardContainer, obj, cardScore);

    // Add cardinfo to div
    cardContainer.append(subDiv);
    cardContainer.append(cardCountry);
    cardContainer.append(cardScore);
    cardContainer.append(buttonContainer);
    cardContainer.setAttribute('id', objId);

    // Add card to container
    const container = document.querySelector('.leaderboard-container');
    container.append(cardContainer);
}

const incrementScoreEvent = (button, cardContainer, cardObject, cardScore) => {
    button.addEventListener('click', e => {
        cardObject.incrementScore();
        cardScore.innerHTML = cardObject.getScore;
        sortLeaderBoard();
    })
}

const decrementScoreEvent = (button, cardContainer, cardObject, cardScore) => {
    button.addEventListener('click', e => {
        cardObject.decrementScore();
        cardScore.innerHTML = cardObject.getScore;
        sortLeaderBoard();
    })
}

// Remove player from leaderboard
const removeCardEvent = (button, cardContainerNode) => {
    button.addEventListener('click', e => {
        const container = document.querySelector('.leaderboard-container');
        container.removeChild(cardContainerNode);
    })
}

// Sort leadrboard
const sortLeaderBoard = () => {
    // Get all scores
    const scores = document.querySelectorAll('.card-score');

    // Sort scores
    const sortedScores = mergeSort([...scores])

    // Append scores in sorted order
    sortedScores.forEach((card) => {
        card.parentElement.parentElement.appendChild(card.parentElement)
    })
}

const merge = (arr1, arr2) => {
    // Array to store new sorted items
    let sorted = [];

    // While no array is emtpy
    while (arr1.length && arr2.length) {
        // Check innerhtml values. If one item is greater, push that into sort and shift it out of previous array.
        if (Number(arr1[0].innerHTML) > Number(arr2[0].innerHTML)){
            sorted.push(arr1.shift());
        } else {
            sorted.push(arr2.shift());
        }
    }
    // Concatenate remaining items in arrays
    return sorted.concat(arr1.slice().concat(arr2.slice()));
}

const mergeSort = arr => {
    // Set basecase for returning from recursion to when array is empty or only has one item elft
    if (arr.length <= 1) return arr;

    // Recursively split array into two
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
  
    // When returning from recursion merge the two arrays
    return merge(left, right); 
  };
  