const inputValidation = (input) => {
    for (let i = 0; i < input.length; i++){
        if (!input[i].value) {
            return 1;
        } 
    } 
    if (isNaN(input[input.length-1].value)){
        return 2;
    }
    return 0;
}

const allFieldsError = () => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "All fields are required.";
    errorMessage.classList = 'error-message';

    const targetTag = document.querySelector('.leaderboard-container');
    document.body.insertBefore(errorMessage, targetTag)
}

const scoreNaNError = () => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Player score must be numerical.";
    errorMessage.classList = 'error-message';

    const targetTag = document.querySelector('.leaderboard-container');
    document.body.insertBefore(errorMessage, targetTag)
}

const clearErrors = () => {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach((x) => x.parentNode.removeChild(x));
}