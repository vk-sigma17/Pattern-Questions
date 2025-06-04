// Q. 1

// 1
// 2 1
// 3 2 1
// 4 3 2 1

// let n = 4;

// for(let i = 0; i < n; i++){
//     let row = "";
//     for(let j = i + 1; j >= 1; j--){
//         row += j + " ";
//     }
//     console.log(row)
// }


// Q . 2
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let n = 4;
// let num = 1

// for(let i = 0; i < n; i++){
//     let row = "";
//     for(let j = 1; j <= i + 1; j++){
//         row += num + " ";
//         num++;
//     }
//     console.log(row);
// }


// A 
// B C
// D E F
// G H I J

let n = 4;
let ch = 65

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 1; j <= i + 1; j++){
        row += String.fromCharCode(ch) + " ";
        ch++;
    }
    console.log(row);
}