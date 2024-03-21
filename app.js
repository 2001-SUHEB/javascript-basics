 
//-------------------basics-------------------------
// const myname="suheb"

// let a=5

// console.log(myname)  //cannot be changed
// console.log(a)

// a=999

// console.log(a)

//--------------------datatypes--------------------
// let mynum;
// console.log(mynum)

// let boolvalue=true
// let nullvalue=null

// console.log(boolvalue)
// console.log(nullvalue)

//------------------array--------------------------------

// let array=[1,2,3,4,5,6,7,8]

// console.log(array.length)
// console.log(array[0])
// console.log(array[1])
// console.log(array[array.length-1])

//-----------------composite data type--(map)--------------------

 
// const person={
//     name:{
//         firstname:"syed",
//         middlename:"sha",
//         lastname:"suheb"
//     },
//     age:22,
//     city:"Vellore"

// }
// console.log(person)

// const student={
//     name:"syed sha suheb",
//     age:22,
//     courses:[{coursname:"DSA",coursecredits:3},{coursname:"web dev",coursecredits:4}]
// }
// console.log(student)
// console.log(student.courses)
// console.log(student.courses[0])
// console.log(student.courses[1].coursname)

//--------------template strings------------------------

// let mynamenew="suheb"

// mynamenew="rinci"

// console.log(`hello ${mynamenew}`)

//---------prompt and alert--------------------------------

// const studentname=prompt("Enter your name: ")
// alert(`hello ${studentname}`)

//-----------------Operators-------------

// let a=7
// let b=3

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// a++
// console.log(a)
// b--
// console.log(b)

//---------comparators----------------

// console.log(3>4)
// console.log(3<4)
// console.log(3>=4)
// console.log(3>=3)
// console.log(3=='3')
// console.log(3==='3')

//----------conditionals-------------------

// let weather="Sunny"
// let subCondition="Too Hot"

// if(weather==="Cloudy"){
//     console.log("Take the umbrella")
// }else if(weather==="Rainy"){
//     console.log("Use the umbrella")
// }
// else if(weather==="Sunny"){
//     if(subCondition==="Too hot"){
//         console.log("Use the umbrella")
//     }
//     else{
//         console.log("Don't use the umbrella")
//     }
// }else{
//     console.log("Don't take the umbrella")
// }


//--------ternary Operator----------------------------

// let result=9>5

// result?console.log("Result is true"):console.log("Result is false")

// let age=prompt("Enter your age");

// if(age>60){
//     console.log("Senior Citizen");
// }
// else if(age<18){
//     console.log("Minor");
// }else{
//     console.log("Adult");
// }

//-------------------false values------------------

// false--bool false
// 0----number 0
// null---null
// undefined
// NaN--not a number
// ""---empty string

// let a;

// if(a){
//     console.log("bool is true")
// }else{
//         console.log("bool is false")
// }

//--------logical operators--------------

let a1=0;
let a2="";
if(a1||a2){
    console.log("hi")
}

let b1=56;
let b2=89;;

if(b1&&b2){
    console.log("hello")
}