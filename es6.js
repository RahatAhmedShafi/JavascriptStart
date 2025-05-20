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
{
    let num1=function () {
        console.log(message);
    }
    let message="hello shafi"
    num1()
}

