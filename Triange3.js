// Q.1
// *
// * *
// * * *
// * * * *

// let n = 4;

// for(let i = 0; i<n; i++){
//     let row = "";
//     for(let j = 0; j < i+1; j++){
//         row += "*" + " ";
//     }
//     console.log(row)
// }


// Q.2

// 1
// 1 2
// 1 2 3
// 1 2 3 4

// let n = 4;

// for(let i = 0; i<=n; i++){
//     let row = "";
//     for(let j = 1; j < i+1; j++){
//         row += j + " ";
//     }
//     console.log(row)
// }


// Q. 3

// 1
// 2 2
// 3 3 3
// 4 4 4 4


// let n = 4;

// for(let i = 1; i<= n; i++){
//     let row = "";
//     for(let j = 1; j < i+1; j++){
//         row += i + " ";
//     }
//     console.log(row)
// }

// Q.4
// A 
// B B 
// C C C
// D D D D


let n = 4;
let ch = 65;
for(let i = 1; i<= n; i++){
    let row = "";
    for(let j = 1; j < i+1; j++){
        row += String.fromCharCode(ch) + " ";
    }
    console.log(row)
    ch++;
}

// Q.5

// A 
// B C 
// D E F
// G H I J

// let n = 4;
// let ch = 65;
// for(let i = 1; i<= n; i++){
//     let row = "";
//     for(let j = 1; j < i+1; j++){
//         row += String.fromCharCode(ch) + " ";
//         ch++;
//     }
//     console.log(row)
// }

