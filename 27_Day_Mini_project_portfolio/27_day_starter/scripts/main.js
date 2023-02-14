// Get description
const description = document.querySelector('.description');

// Set description
setDescription(description);

// Get rolling banner container

// Get banner data
const bannerTitles = titles;

// First iteration
setRollingBanner(bannerTitles)

// Continous iterations of banner
setInterval(function() {
    setRollingBanner(bannerTitles);
}, 3000);

// Get linkboxes
const linkboxes = document.querySelectorAll('.link-box-container');

// Change css-classes on linkboxes which toggles animations.
addOnHover(linkboxes);

// Activate links for linkboxes
addOnClick(linkboxes);

// Get technology list
const techList = technologies;

// First iteration of random tech in pulsing footer
setPulsingFooter(techList);

// Continous iterations of pulsing footer
setInterval(function() {
    setPulsingFooter(techList);
}, 3000);