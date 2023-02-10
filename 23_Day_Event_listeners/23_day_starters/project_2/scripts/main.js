// Container
const container = document.querySelector('.container')


// Wrapper
const wrapper = document.querySelector('.wrapper')
wrapper.style.display = 'flex';
wrapper.style.justifyContent = 'center';
wrapper.style.alignItems = 'center';
wrapper.style.height = '100vh';
wrapper.style.flexDirection = 'column';
wrapper.style.fontFamily = 'Helvetica';
wrapper.style.fontSize = '45px';
wrapper.style.fontWeight = '400';


// Keytext
const keyText = document.querySelector('.key-text')
keyText.style.borderStyle = 'none';
keyText.style.boxShadow = "0px 1px 4px #888888";
keyText.style.padding = "14px";
keyText.style.width = "500px";
keyText.style.marginBottom = "10px";
keyText.style.textAlign = 'center';
keyText.style.textShadow = '1px 1px lightGray';

// Keynumber
const keyNumber = document.querySelector('.key-number');
keyNumber.style.borderStyle = 'none';
keyNumber.style.display = 'none';
keyNumber.style.alignItems = 'center';
keyNumber.style.justifyContent = 'center';
keyNumber.style.boxShadow = "0px 0px 6px lightGray";
keyNumber.style.width = '60px';
keyNumber.style.height = '70px';
keyNumber.style.borderRadius = '5px';
keyNumber.style.color = 'mediumSeaGreen';
keyNumber.style.padding = '25px';
keyNumber.style.paddingBottom = '35px';
keyNumber.style.fontSize = '60px';
keyNumber.style.textShadow = '0.5px 0.5px black';
keyNumber.style.marginTop = "10px";


// Global eventlistener, listen to keystroke and update contents in wrapper
document.body.addEventListener('keydown', e => {
    updateKeyText(e), updateKeyNumber(e)
})

// Update keytext
const updateKeyText = (event) => {
    const strong = document.createElement('strong');
    const keyName = event.code;
    strong.innerHTML = keyName.replace("Key", "").replace("Digit", "");
    strong.style.color = "mediumSeaGreen";
    strong.style.textShadow = '0.5px 0.5px black';
    keyText.innerHTML = "You pressed ";
    keyText.append(strong);
}

// Update keynumber
const updateKeyNumber = (key) => {
    keyNumber.style.display = 'flex'
    keyNumber.innerHTML = key.keyCode;
}