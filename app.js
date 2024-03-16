
//basics
// const myname="suheb"

// let a=5

// console.log(myname)  //cannot be changed
// console.log(a)

// a=999

// console.log(a)

//datatypes
// let mynum;
// console.log(mynum)

// let boolvalue=true
// let nullvalue=null

// console.log(boolvalue)
// console.log(nullvalue)

//array

// let array=[1,2,3,4,5,6,7,8]

// console.log(array.length)
// console.log(array[0])
// console.log(array[1])
// console.log(array[array.length-1])

//composite data type--(map)

const person={
    name:{
        firstname:"syed",
        middlename:"sha",
        lastname:"suheb"
    },
    age:22,
    city:"Vellore"

}
console.log(person)

const student={
    name:"syed sha suheb",
    age:22,
    courses:[{coursname:"DSA",coursecredits:3},{coursname:"web dev",coursecredits:4}]
}
console.log(student)
console.log(student.courses)
console.log(student.courses[0])
console.log(student.courses[1].coursname)