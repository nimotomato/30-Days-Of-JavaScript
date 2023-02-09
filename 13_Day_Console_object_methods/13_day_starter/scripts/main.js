console.table(countries)

const centries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

console.clear()

console.table(centries)

console.clear()


console.assert(10 > 2*10)
console.warn("There are no polar bears in Sweden")
console.error("You tried but failed again.")

console.time('Regular for loop')
for (let i = 0; i < centries.length; i++) {
  console.log(centries[i][0], centries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of centries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
centries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')

console.time('while loop')
let x = 0
while (x < centries.length){
    console.log(centries[x][0], centries[x][1])
    x++
}
console.timeEnd('while loop')