// FUNCTIONS 

// function functionName(parameters){
//     //execute code
//     return
// }

// function greet(){
//     console.log("WELCOME TO JAVASCRIPT")
// }

// greet()

function greet(name, language = "JAVASCRIPT"){
    console.log(`Hello ${name}, Welcome to ${language}!`)
}

// greet("JOHN","JS")
// greet("Gathoni","CSS")
// greet("Jane","HTML")
// greet("Brian")


function add(a,b){
    let sum = a + b
    return sum
}

let result = add(1,2)
console.log("result",result)

let result2 = add(2323223,2323547)
console.log("result2",result2)

function login(username, password){
    // processing
}
// ARROW FUNCTION 
// function multiply(c,d){
//     return c*d
// }
// const functionName = (params) => execution
const multiply = (c,d) => c * d
console.log("arrow function:",multiply(2,3))

const divide = (a,b) => {
    return a/b
}
const isEvenNumber = (a) => {
    let remainder = a%2
    let result = null 
    if (remainder === 0){
        result = "EVEN NUMBER"
    }else {
        result = "ODD NUMBER"
    }
    return result
}
console.log("IS EVEN:",isEvenNumber(123))
console.log("IS EVEN:",isEvenNumber(124))
//GRADES CALCULATR FUNTION
 function calculateGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "E";
    }
}

console.log(calculateGrade(85));
console.log(calculateGrade(72));
console.log(calculateGrade(45));

// SCOPE
const outVar = "outside"
console.log("outVar from outside function",outVar)

function testScope(){
    let grade = 10
    const inVar = "inside a function"
    console.log(inVar) // displayed
    console.log("outVar from inside function",outVar)

}

console.log("outVar from outside function",outVar)

testScope()
// console.log("inVar from outside function",inVar) //reference error context


// ARRAYS 
console.log("==== ARRAYS ====")
const fruits = ["mango","orange"]
console.log(fruits)
// add 
// -front (unshift) - shift
fruits.unshift("Apple")
console.log(fruits,"APPLE ADDED TO THE FRONT")
// -back (push) - pop
fruits.push("water melon")
console.log(fruits,"-Water melon added to the end -")
fruits.shift() // remove first item
console.log(fruits,'APPLES REMOVED - FROM THE FRONT')


fruits.pop()
console.log(fruits,"-Water melon removed to the end -")

const num = [1,2,3,10,23,13,142,4,5,6,7]
console.log(num.indexOf(1))
console.log(fruits.indexOf("orange"))

// major aray methods 
console.log("===> ARRAY METHODS <===")
//forEach
num.forEach((n) => console.log(n))
//map
const double = num.map(n => n*2)
console.log("double:",double)
//filter
const odd = num.filter((n) => n % 2 !== 0)
console.log("ODD:",odd)
//find
const firstBig = num.find((n) => n > 3) //returns the first that meets the criteria
console.log("find:",firstBig)
//reduce
const cart = num.reduce((sum, n)=> sum+n,0);
console.log("redduce:", cart)
const sort = num.sort((a,b)=> a - b)
console.log("sort:",sort)


// OBJECTS
console.log("======== OBJECTS =======")
const student = {
    name: "Amina",
    age: 20,
    courses: ["HTML", "CSS"],
    address: { city: "Nairobi", country: "Kenya" },
    greet() { return `Hi, I'm ${this.name}`; }
    };
console.log(student)
console.log(student.age)
console.log(student["age"])
console.log(student.courses[0])
console.log(student.address.country)
console.log(student.greet())
student.name = "Byron" // update
student.admission = "001" // add/insert
delete student.age //remove a key

console.log(student)
const studentKeys = Object.keys(student)
console.group(studentKeys)
const studentValues = Object.values(student)
console.group(studentValues)
const studentArray = Object.entries(student)
console.log(studentArray)

// DESTRUCTURING 
console.log("====> destructuring <====")

const {name, age, courses, admission} = student
console.log(name,age,admission)

// spread - a copy
const languages = ["HTML","CSS","JS"]
console.log(languages)
const newLanguages = [...languages,"Python"]
console.log(newLanguages)

const updatedStudent = {...student,name:"James"}
console.log(updatedStudent)

// Rest parameters -- Gatther or aggregate together
function sum(...numbers){
 return numbers.reduce((sum,n) => sum+n,0);
}
console.log(sum(1,2,3,4,23,23))

console.log(student.address?.postalCode?? "NO POSTAL CODE")
console.log(typeof student)
const jsonStudent = JSON.stringify(student) // obj -> json string
console.log(jsonStudent)//json string
const obj = JSON.parse(jsonStudent) // json -> object
console.log(obj)
