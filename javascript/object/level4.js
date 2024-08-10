const obj = {
    math:50,
    science:60,
    gk: 40
}
let sum=0
//150
for(let item in obj){
    sum=sum + obj[item]
}
console.log(sum);

// const students = [
//     { name: 'Alice', grade: 'A' },
//     { name: 'Bob', grade: 'B' },
//     { name: 'Charlie', grade: 'A' },
//     { name: 'David', grade: 'C' },
//     { name: 'Eve', grade: 'B' }
// ];

// // Expected output:
// // {
// //   'A': ['Alice', 'Charlie'],
// //   'B': ['Bob', 'Eve'],
// //   'C': ['David']
// // }
// const newStudents= students.reduce((initial, total)=>{

// })
