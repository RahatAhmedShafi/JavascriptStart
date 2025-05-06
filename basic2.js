                       // Functions
// function saymyname() {
//     console.log("my name is rahat");
    
// }
// saymyname()

// function add(a, b) {
//     let sum =a+b
//     return sum


// }
// console.log( add(2,3))

// function sum(...values) {   //... is the rest operator we call them is rest functions
//     // it will take all the values in an array
//     let total=0;
//     for(let i=0;i<values.length;i++){
//         total+=values[i]
//     }
//     return total
// }
// const result=sum(2,34,5,6,68)
// console.log(result)


// function add(getarray){
//     let sum=0
//     for (let i=0;i<getarray.length;i++){
//         sum+=getarray[i]
//     }
//     return sum

// }
// let value=add([33,44,55,66,77])
// console.log(value)

                       //Scope
// let a=10
// function add(){
//     let b=20
//     console.log(a+b)
// }
// console.log(b) // it will give an error because b is not defined outside the function;
// add()
                       //Arrow function

// const tea=function(){
//     console.log("tea is ready")
// }
// tea()

// const tea=()=>{
//     console.log("tea is ready")
// }
// tea()

// const add=(a,b)=>{
//     return a+b
// }
// console.log(add(2,3))

// const add2=(a,b)=>a+b // if we have only one line of code we can remove the curly braces and return keyword
//  console.log(add2(2,3))

                       //// Immediately Invoked Function Expressions (IIFE)

(function tea(){
    console.log("tea is ready")
})();

(()=>{
    console.log("tea2 is ready")
})();

((name)=>{
    console.log(`${name}! tea is ready`)
})("rahat");
