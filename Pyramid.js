//    1
//   121
//  12321
// 1234321

// let n = 4;

// for(let i = 0; i < n; i++){
//     let row = "";
//     for(let j = 0; j < n - i -1; j++){
//         row += " ";
//     }
//     for(let j = 0; j < i+1; j++){
//         row += j+1;
//     }
//     for(let j = i ; j >= 1; j--){
//         row += j;
//     }
//     console.log(row)
// }


// 1234321
//  12321
//   121
//    1

let n = 4;

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j < i ; j++){
        row += " ";
    }
    for(let j = 0; j < n-i; j++){
        row += j+1;
    }
    for(let j = n -i -1 ; j >= 1; j--){
        row += j;
    }
    console.log(row)
}