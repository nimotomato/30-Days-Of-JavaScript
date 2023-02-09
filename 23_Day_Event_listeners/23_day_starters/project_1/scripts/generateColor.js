let colors = [
    'tomato',
    'mediumSeaGreen',
    'gold'
] 
const generateColor = () => {
    let colorsIndex = Math.floor(Math.random() * 3)
    return colors[colorsIndex]
}

