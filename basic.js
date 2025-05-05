// console.log("Welcome to Javascript");
// console.log("This is Commit"); // This is a comment

// let accountEmail="jhon@gmail.com"
// let accountPassword="12345678"
// let accountCity="Dhaka"


// console.table([accountEmail,accountPassword,accountCity])

// let score="33"
// console.log(typeof score)
// let score1=Number(score)
// console.log(typeof score1)

// let number1=null
// console.log(number1)
// console.log(typeof number1) // null is an object in js

// let number2=undefined
// console.log(number2)
// console.log(typeof number2) // undefined is a type in js

// create a object
// let user={
//     name: "rahat",
//     age:24,
//     Proffession:"developer"
// }
// console.log(user)
// console.table(user) // to show the object in a table format


// score=100
// const bonus=50
// score=150
// var score
// console.log(score+bonus) // 150

// lets drive string

let name="rahim"
// console.log(name) // rahim
// console.log(name.length) // 5
// console.log(name.toUpperCase()) // RAHIM
// console.log(name.toLowerCase()) // rahim
// console.log(name.charAt(0)) // r
// console.log(name.indexOf("h")) // 2
// substring
// console.log(name.substring(0,3)) // rah

const firstName="rahim"
const repositoryCount=20

const message=`my name is ${firstName} and I have ${repositoryCount} repositories`
// console.log(message)

const message2=new String("Welcome to javascript")       
// console.log(message2) // [String: 'Welcome to javascript']
// console.log(message2.length) // 21
// console.log(message2.charAt(0)) // W
// console.log(message2.indexOf("javascript")) // 11
// console.log(message2.substring(0,5)) // Welco
// console.log(message2.toUpperCase()) // WELCOME TO JAVASCRIPT
// console.log(message2.replace("javascript","js")) // Welcome to js
// console.log(message2.split(" ")) // [ 'Welcome', 'to', 'javascript' ]   
// console.log(message2.split("a")) // [ 'Welcome to j', 'v', 'script' ]
const message3="  Welcome  "
// console.log(message3)
// console.log(message3.trim())

                        // number &  math
let number1=10
// console.log(number1) // 10

let number2=new Number(10.5893)
// console.log(number2)
// console.log(number2.toPrecision(3))
// console.log(Math.round(number2))
 // Welcome to javascript
// console.log(Math.floor(number2)) // 10
// console.log(Math.ceil(number2)) // 11
// console.log(Math.random())

// Date and Time
let date=new Date()
// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getMonth()+1) // 0-11
// console.log(date.getDate()) // 1-31
// console.log(date.getDay()) // 0-6
// console.log(date.getHours()) // 0-23
// console.log(date.getMinutes()) // 0-59
// console.log(date.getSeconds()) // 0-59

// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleString()) // 10/1/2023, 12:00:00 AM
// console.log(date.toISOString()) // 2023-10-01T06:00:00.000Z
// console.log(date.toUTCString()) // Sun, 01 Oct 2023 06:00:00 GMT
// console.log(date.toString()) // Sun Oct 01 2023 12:00:00 GMT+0600 (Bangladesh Standard Time)
// console.log(date.toTimeString()) // 12:00:00 GMT+0600 (Bangladesh Standard Time)
// console.log(date.toLocaleString("en-BD")) 

let date1=new Date("2023-10-01")
let date2=new Date(2001,0,21)
console.log(date1) // 2023-10-01T00:00:00.000Z
console.log(date2) // 2001-01-20T18:00:00.000Z
date1=new Date(2018, 11, 24, 10, 33, 30)
console.log(date1) // 2025-05-04T02:35:50.000Z


