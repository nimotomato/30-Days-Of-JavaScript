const setBannerBullet = (containerTag, icon) => {
    const bullet = document.createElement('p');
    bullet.className = 'banner-icon';
    bullet.innerHTML = icon;
    containerTag.appendChild(bullet);
}

const setBannerText = (containerTag, text) => {
    const bannerText = document.createElement('p');
    bannerText.className = 'banner-text';
    bannerText.innerHTML = text;
    bannerText.style.animationName = 'rolling-banner';
    bannerText.style.animationDuration = '2s';
    containerTag.appendChild(bannerText)
}

const getRandomNumber = (ceiling) => {
    return Math.floor(Math.random() * ceiling);
}

const setRollingBanner = (titleList) => {
    // Reset banner
    const rollingBanner = document.querySelector('.rolling-banner-container');
    rollingBanner.innerHTML = '';

    // Set banner
    const title = titleList[getRandomNumber(titleList.length)];
    setBannerBullet(rollingBanner, Object.keys(title));
    setBannerText(rollingBanner, Object.values(title));
}


