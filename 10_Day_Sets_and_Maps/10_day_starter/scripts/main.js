
const mySet = new Set();
console.log(mySet)
let x = 0;
while (x < 11){
    mySet.add(x)
    x ++
}
mySet.delete(3)
mySet.clear()

const fearsArray = [
    "death",
    "cancer",
    "humiliation",
    "failure",
    "pain"
]

const fears = new Set ([...fearsArray])

console.log(fears)

con = ['Finland','Sweden','Norway']

const myMap = new Map()

for (let i = 0; i < con.length; i++){
    myMap.set(con[i], con[i].length)
}
console.log(myMap)

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const newSet = new Set([...a, ...b])
console.log(newSet)

let A = new Set(a)
let B = new Set(b)

let C = new Set(a.filter((num) => B.has(num)))
console.log(C)

let D = new Set(b.filter((number) => !A.has(number)))
console.log(D)

let languages = new Set(countries.map((x) => x.languages).reduce((acc, curr) => acc.concat(curr)))
console.log(languages)

