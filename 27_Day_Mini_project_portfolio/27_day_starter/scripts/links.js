// Add eventlisteners
const addOnHover = (linkboxes) => {
    linkboxes.forEach((box) => {
        box.addEventListener('mouseenter', e=> {
            box.removeAttribute('class');
            box.setAttribute('class', 'link-box-container box-hover');
        })
        box.addEventListener('mouseleave', e=> {
            box.removeAttribute('class');
            box.setAttribute('class', 'link-box-container box-default');
        })
    })
}

const addOnClick = (linkboxes) => {
    linkboxes.forEach((box) => {
        box.addEventListener('click', e=> {
            let link = box.id;
            window.open(link)
        })
    })
}