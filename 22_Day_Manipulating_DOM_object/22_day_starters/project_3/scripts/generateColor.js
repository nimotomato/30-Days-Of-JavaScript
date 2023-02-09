let colors = [
    'green',
    'blue',
    'red',
    'yellow',
    'orange',
    'magenta',
    'purple',
    'pink',
    'cyan'
] 
const generateColor = () => {
    let colorsIndex = Math.floor(Math.random() * 9)
    return colors[colorsIndex]
}

