                    // Learn ES6 in javasript

// let num=10
// for(let i=0;i<num;i++){
//     console.log(i);
// }

// let num=5
// if (num==5) {
//    let num=10
//     console.log(num);
// }
// console.log(num);

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
        
//     }, 2000);
// }

// console.log(num)
// let num="hello"  // error

                    // Temporal death zone (TDZ)
// {
//     let num1=function () {
//         console.log(message);
//     }
//     let message="hello shafi"
//     num1()
// }
                    //ES6 provides a new construct called for...of

// let score=[34,55,67,49]
// for (let element of score) {
//     console.log(element);
// }

                    //Arrow Functions

// let value=function (num1,num2) {
//     return num1+num2
    
// }
// let result=value(30,40)
// console.log(result)

// let value=(x,y)=>{
//     return x+y
// }
// console.log( value(40,50))

// let value =(x,y)=>x+y
// console.log(value(40,30))

// let number=()=>console.log("hello arrow function")
// number()


                        //Template Literals
// let str=`this is the wrong number`
// console.log(str)
// console.log(str.length)
// console.log(typeof(str))

// let post={
//     title:`Rahat visited to Khulna`,
//     heading:`Rahat is the only men who can visit khulna after the covid 19 occures`,
//     tag:[`rahat`,`khulna`,`covid19`]
// }
// console.log(post);
// console.log(typeof(post));
// console.log(post.title);

// let name1=`Rahat`
// let name2=`Ahmed`
// console.log(`My Name is ${name1} ${name2}`);

                    //Destructuring

// let quantity=()=>{
//     return [40,50,70]
// }
// let store=quantity()
// console.log(store);
// console.log(typeof(store));
// let x=store[0]
// let y=store[2]
// console.log(x)
// console.log(y)
                     
                        // Spread Operator

let marks=(a,b,...odd)=>{
    console.log(odd);
    

}
marks(30,40,50,90)

let mark2=(...odd)=>{
    console.log(odd);
    

}
mark2(105,109,509,609,405)



