const constants = [2.72, 3.14, 9.81, 37, 100]

let [e, pi, gravity, bodyTemp, boilingTemp] = constants;

console.log(e)

const cont = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, swe, den, nor] = cont

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }

let {width, height, area, perimeter} = rectangle
console.log(width)
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

// for (const {name, scores, skills, age} of users){
//     console.log(name, scores, skills, age)
// }

// const keysUser = Object.keys(users[0])
// console.log(keysUser)

// for (const {name,scores,skills,age} of users){
//     if (skills.length < 2){
//         console.log(name, skills)
//     }
// }

// for (let {name, capital, population, languages} of countries){
//     console.log(name, capital, population, languages)
// }

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// let [name, skills, scores] = student
// let [s, _, jsScore, reactScore] = scores
// console.log(name, skills, jsScore, reactScore)


const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr){
  const newArr = arr.reduce((newArr, cur) => {
    newArr.push(
      {'name': cur[0], 'skills': cur[1], 'scores': cur[2]});
      return newArr},
       []);
  return newArr;
}

console.log(convertArrayToObject(students))

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}


const newStudent = {...student}
console.log(newStudent)


newStudent.skills.frontEnd = [...newStudent.skills.frontEnd, {skill: 'BootStrap', level: 8}]
newStudent.skills.backEnd = [...newStudent.skills.backEnd, {skill: 'Express', level: 9}]

newStudent.skills.dataBase = [...newStudent.skills.dataBase, {skill: 'SQL', level: 8}]
newStudent.skills.dataScience.push('SQL')

console.log(newStudent)
