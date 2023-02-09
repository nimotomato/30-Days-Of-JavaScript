class Animal {
  constructor(name, age, color, legs){
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }

  getAnimalInfo(){
    let info = `This is ${this.name}, an animal. ${this.name} is ${this.age} years old, ${this.color} and has ${this.legs} legs.`
    return info
  }
}

class Dog extends Animal{
  constructor(name, age, color, legs, gender, food){
  super(name, age, color, legs)
    this.gender = gender
    this.food = food
  }
  getAnimalInfo() {
    let info = `This is ${this.name}, a dog. ${this.name} is ${this.age} years old, ${this.color} and has ${this.legs} legs. ${this.name}s favorite food is ${this.food}.`
    return info
  }
}

class Cat extends Animal{
  constructor(name, age, color, legs, gender, food){
  super(name, age, color, legs)
    this.gender = gender
    this.food = food
  }

  getAnimalInfo() {
    let info = `This is ${this.name}, a cat. ${this.name} is ${this.age} years old, ${this.color} and has ${this.legs} legs. ${this.name}s favorite food is ${this.food}.`
    return info
  }
}

const beast = new Animal("Beast", 10, "metallic purple", 8)

const kitty = new Cat("Kitty", 492, "black", "4", "female", "suffering")

const ben = new Dog("Ben", 4, "yellow", "3", "male", "Kitty") 

console.log(beast.getAnimalInfo())
console.log(kitty.getAnimalInfo())
console.log(ben.getAnimalInfo())


ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics{
  constructor(values){
    this.values = values
    this.total = this.values.reduce((acc, cur) => {
      return acc + cur
    }, 0)
  }

  count() {
    return this.values.length
  }

  sum() {
    return this.total
  }

  min() {
    return this.values.sort((a, b) => {
      return a - b
    })[0]
  }

  max() {
    return this.values.sort((a, b) => {
      return b - a
    })[0]
  }

  range() {
    return this.max() - this.min()
  }

  mean() {
    return this.sum / this.values.length
  }

  median() {
    const sortedValues = this.values.sort((a, b) => {
      return a - b
    })

    let endIndex = sortedValues.length - 1

    if (sortedValues.length % 2 !== 0){
      let medianIndex = Math.floor(endIndex/2)
      let median = sortedValues[medianIndex]
      return median
    } else{
      let lowerIndex = Math.floor(endIndex/2)
      let upperIndex = Math.ceil(endIndex/2)
      let median = (sortedValues[lowerIndex] + sortedValues[upperIndex])/2
      return median
    }
  }

  mode() {
    const frequencies = Object.entries(this.values.reduce((frequency, mode) => {
      frequency[mode] = (frequency[mode] || 0) + 1;
      return frequency
    }, {})).map(([key, mode]) => {
      return {mode: key, frequency: mode};
    }).sort((a, b) => {
      return b.frequency - a.frequency
    })
    return frequencies[0]
  }

  variance() {
    const average = this.sum()/this.values.length;
    const squareDiffs = this.values.map((value) => {
        const diff = value - average;
        return diff * diff;
    });
    const variance = squareDiffs.reduce((sum, current) => sum + current) / squareDiffs.length;
    return variance;
  }  

  std() {
    return Math.ceil((Math.sqrt(this.variance())) * 10)/10;
  }

  freqDist() {
    const frequencies = Object.entries(this.values.reduce((frequency, value) => {
      frequency[value] = (frequency[value] || 0) + 1;
      return frequency
    }, {}))

    return frequencies
  }

  describe() {
    console.log(this.mean())
    console.log(this.count())
    console.log(this.sum())
    console.log(this.min())
    console.log(this.max())
    console.log(this.range())
    console.log(this.median())
    console.log(this.mode())
    console.log(this.variance())
    console.log(this.std())
    console.log(this.freqDist())
  }
}

let statistics = new Statistics(ages)
statistics.describe()
console.clear()

class PersonAccount {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.incomes = []
    this.expenses = []
    this.accountBalance = 100
  }

  totalIncome(){
    const incomesArray = this.incomes.map((value) => {
      return [...value][0]
    } ).reduce((acc, cur) => {
      return acc + cur
     }, 0)
    return incomesArray
  }

  totalExpense(){
    const expensesArray = this.expenses.map((value) => {
      return [...value][0]
    } ).reduce((acc, cur) => {
      return acc + cur
     }, 0)
    return expensesArray
  }

  get accountInfo(){
    return [this.firstName, this.lastName, this.incomes, this.expenses, this.accountBalance]
  }

  set addExpense(expense){
    this.expenses.push(expense);
  }

  set addIncome(income){
    this.incomes.push(income)
  }
}

const acc = new PersonAccount("Voldemort", "J")

const expense = new Set([100, 'beer'])
const smokes = new Set([150, 'smokes'])
const income = new Set([200, 'onlyfans'])

acc.addExpense = expense;
acc.addExpense = smokes;
acc.addIncome = income;
console.log(acc)
console.log(acc.totalExpense())
console.log(acc.totalIncome())