// Cycle random technologies
const setPulsingFooter = (techList) => {
    // Get and clear container
    const pulsingTextContainer = document.querySelector('.pulsing-footer-container');
    pulsingTextContainer.innerHTML = '';

    // Create non pulsing element
    const staticText = document.createElement('p');
    staticText.classList = ('pulsing-footer-static-text');
    staticText.textContent = 'The tecnologies I teach';

    // Create pulsing element
    const pulsingText = document.createElement('p');
    pulsingText.classList = ('pulsing-text');

    // Get random data to pulse
    const tech = techList[getRandomNumber(techList.length)];

    // Pulse css
    pulsingText.style.animationName = "fade-in";
    pulsingText.style.animationDuration = '2s';
    pulsingText.innerHTML = Object.keys(tech);
    pulsingText.style.color = Object.values(tech);

    // Append
    pulsingTextContainer.appendChild(staticText);
    pulsingTextContainer.appendChild(pulsingText);
}
