let myString = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let pattern = /\b\d{1,5}\b/gi

const result = myString.match(pattern).map(x => parseInt(x)).reduce((acc, cur) => acc + cur, 0)

console.log(result)

let pat = /^\D/gi

let first =['first_name', //true
 'first-name', //false
 '1first_name', //false
 'firstname', //true
 '-firstname'] //false


const val = (str) => pat.test(str)


for (const i of first){
    console.log(val(i))
}

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const max = 10;
let p  = /[a-z|A-Z]*/gi
let arr = []
const res = Object.entries(paragraph.match(p).filter((x) => x != "").reduce((dict, word) => {
    dict[word] = (dict[word] || 0) + 1;
    return dict
}, {})).forEach(([key, value]) =>{
    arr.push({[key]: value})
})

const resultado = arr.sort(function (a, b) {
    const aValue = Object.values(a)[0];
    const bValue = Object.values(b)[0];
    if (aValue > bValue) return -1;
    if (aValue < bValue) return 1;
    return 0;
}).slice(0, max);

console.log(resultado)
    
