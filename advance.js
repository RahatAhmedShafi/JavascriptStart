// console.log('Hello from advance.js')
// console.log('Hello from advance.js 2')
// console.log('Hello from advance.js 3')

        //-----Async function

// console.log("program start");
// console.log("Program exicution");

// setTimeout(()=>{
//     console.log("It's the time to break the code");
// },4000)
// console.log("Program end");

                               //----callback function
// function add(a,b){
//    console.log("Adding two numbers: ",a+b)
   
// }
// // function sub(a,b,sumcallback){
// //     sumcallback(a,b)
// // }
// // sub(5,6,add)

// setTimeout(add,3000,5,6)// // 5,6 are the arguments for add function and 3000 is the time

// function getdata(getid){
//    setTimeout(()=>{
//     console.log(`Getting data from the server with id ${getid}`);
    

//    },2000)}

// //    getdata(5)

                               // callback hell
// function getdata(getid,callback){
//     setTimeout(() => {
//         console.log(`Getting data from the server with id ${getid}`);
//         if(callback){
//             callback();
//         }
        
        
        
//     }, 2000);
// }

// getdata(5,()=>{
//     getdata(6,()=>{
//         getdata(7)
//     })
// })

                                // promise chain

// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("Success");
            
//         },4000)

//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("Success");
            
//         },4000)

//     })
// }
// console.log("fetching data1");
// asyncFunc().then(()=>{
//     console.log("fetching data2");
//     asyncFunc2().then(()=>{

//     });
    
// });

                            // async await
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve("Success");
            
//         },2000)

//     });
// }

// async function getweather() {
//     await api();
//     await api();
// }
// getweather()

                            // API
