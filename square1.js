// Q. Square Patterns

// 1234
// 1234
// 1234
// 1234

// let n = 4
// for(let i = 0; i < n; i++){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         row += j;
//     }
//     console.log(row);
// }

// ****
// ****
// ****

// let n = 4
// for(let i = 0; i < n; i++){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         row += "*" + " ";
//     }
//     console.log(row);
// }


// A B C D
// A B C D
// A B C D

let n = 4
for(let i = 0; i < n; i++){
    let ch = 65; // ASCII code for 'A'
    let row = ""
    for(let j = 1; j <= n; j++){
        row += String.fromCharCode(ch) + " ";  // ASCII code for 'A'
        ch++;      // Move to next letter
    }
    console.log(row);
}

