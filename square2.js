// Q.4
// 123
// 456
// 789

// let n = 3;
// let num = 1;

// for(let i = 0; i < n; i++){
//     let row = "";
//     for(let j = 1; j <=n; j++){
//         row += num + " ";
//         num++;
//     }
//     console.log(row);
// }


// Q .2

// A B C 
// D E F 
// G H I

let n = 3;
let ch = 65;

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 1; j <=n; j++){
        row += String.fromCharCode(ch) + " ";
        ch++;
    }
    console.log(row);
}
