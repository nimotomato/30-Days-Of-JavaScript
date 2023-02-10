let image;
let flexClass;
const setImage = (planet='earth') => {
    flexClass = document.createElement('div')
    flexClass.className = 'flex-item image';
    flexClass.style.backgroundColor = 'rgba(47, 79, 2, 0)';
    flexClass.style.display = 'flex';
    flexClass.style.justifyContent = 'center';
    flexClass.style.padding = '60px';
    flexClass.style.margin = '10px';
    flexClass.style.width = '70vw';
    imageContainer.append(flexClass)

    image = document.createElement('img')
    image.setAttribute('src', `./images/${planet}.png`)
    image.style.display = 'flex'
    image.className = 'planet-image'
    flexClass.append(image)
}

let description;
// Image description container
const setDescription = () => {
    description = document.createElement('div');
    description.className = 'flex-item-description'
    description.style.display = 'flex';
    description.style.flexDirection = 'column';
    description.style.justifyContent = 'center';
    description.style.alignItems = 'center';
    description.style.height = '50%';
    description.style.width = '80%';
    description.style.marginLeft = '40px';
    description.style.backgroundColor = 'rgba(105, 105, 105, 0.2)';
}

let descTitle;
const setDescTitle = () => {
    descTitle = document.createElement('p');
    descTitle.style.color = 'white';
    descTitle.style.fontSize = '30px';
    descTitle.style.margin = '20px';
    descTitle.style.textAlign = 'center'

}

let descStrong;
// For use in updating desc title
const setDescStrong = () => {
    descStrong = document.createElement('strong');
    descStrong.style.color = 'white';
    descStrong.style.fontSize = '30px';
}

let ball;
const setBall = () => {
    ball = document.createElement('h3');
    ball.style.display = 'flex'
    ball.style.justifyContent = 'center';
    ball.style.alignItems = 'center';

    ball.style.borderRadius = '150px';
    ball.style.width = ball.style.borderRadius;
    ball.style.height = ball.style.borderRadius;
    ball.style.margin = '5px'
    ball.style.backgroundColor = 'rgba(105, 105, 105, 0.4)';

    ball.style.color = 'white';
    ball.style.fontSize = '25px';
}

const fullDescrip = () => {
    // Create and set description container
    setDescription()

    // Set title in description
    setDescTitle()

    // Set strong part of title
    setDescStrong()

    // Create weird ball to contain newton value
    setBall()
}

let massError = document.createElement('h2')
const getMassError = () => {
    massError.style.display = 'flex'
    massError.style.justifyContent = 'center'
    massError.style.alignItems = 'center'
    massError.style.width = '70%'
    massError.style.height = '90%'
    massError.style.marginTop = '0px'
    massError.style.backgroundColor = 'rgba(47, 79, 79, 0.3'
    massError.textContent = 'Mass is required'
    massError.style.color = 'white'
    imageContainer.append(massError);
}

let planetError = document.createElement('h2')
const getPlanetError = () => {
    planetError.style.display = 'flex'
    planetError.style.justifyContent = 'center'
    planetError.style.alignItems = 'center'
    planetError.style.width = '70%'
    planetError.style.height = '90%'
    planetError.style.marginTop = '0px'
    planetError.style.backgroundColor = 'rgba(47, 79, 79, 0.3'
    planetError.textContent = 'You have not selected a planet yet'
    planetError.style.color = 'white'
    imageContainer.append(planetError);
}