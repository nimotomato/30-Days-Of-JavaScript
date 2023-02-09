const name = 'Martin'
const age = 2123
const country = 'Swedistan'
const city = 'Malmö'

localStorage.setItem('name', name)
localStorage.setItem('age', age)
localStorage.setItem('country', country)
localStorage.setItem('city', city)

const student = {
    firstName: 'Bob',
    lastName: 'Builder',
    age: 21,
    skills: ['python', 'javascript', 'c#'],
    country: 'Denmark',
    enrolled: true
}

const studentString = JSON.stringify(student, undefined, 4)

localStorage.setItem('student', studentString)

const skills = JSON.parse(localStorage.getItem('student')).skills
console.log(skills)

const myVar = localStorage.key(2)
console.log(myVar)