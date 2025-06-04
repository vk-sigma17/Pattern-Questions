// Q
// 1 1 1 1
//   2 2 2
//     3 3
//       4

// let n = 4;
//  for(let i = 0; i<n; i++){
//     let row = "";
//     for(let j = 0; j < i; j++){
//         row += " ";
//     }
//     for(let j = 0; j < n - i; j++){
//         row += i+1;
//     }
//     console.log(row);
//  }

// Q
// a a a a
//   b b b
//     c c
//       d

let n = 4;
let ch = 65;
 for(let i = 0; i<n; i++){
    let row = "";
    for(let j = 0; j < i; j++){
        row += " ";
    }
    for(let j = 0; j < n - i; j++){
        row += String.fromCharCode(ch);
    }
    ch++;
    console.log(row);
 }