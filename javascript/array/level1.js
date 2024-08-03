const arr = [3,4,5]
// //Q1 
// // find the length of the array
// //expected output is 3

console.log(arr.length);

// //Q2 
// //reverse the array
// //expected output is [5,4,3]
console.log(arr.reverse());

//Q1 find list of numbers divisible by 3

const arrr = [3,5,1,2,9,12]
//write your code here
const filtArrr=arrr.filter((item)=>{
    // if (item % 3 ===0){
    //     return item;
    // }
    return item % 3 === 0;
});
console.log(filtArrr);

//expected output---> [3,9,12]
// hint: %3 === 0
// filter
//syntax:
//const filteredArr = arr.filter((item,id)=>{
//     //
// })
//console.log(filteredArr)

//----------------
// Given an array of numbers, return a new array where each number is squared
const numbers = [1, 2, 3, 4, 5];
// Expected output: [1, 4, 9, 16, 25]
const newNumbers=numbers.map((item,id)=>{
    return item**2;
});
console.log(newNumbers);



//Given an array of strings, return a new array with all strings converted to uppercase.
const words = ['hello', 'world', 'javascript'];
// Expected output: ['HELLO', 'WORLD', 'JAVASCRIPT']
const newWords=words.map((item)=>{
    return item.toUpperCase();
});

console.log(newWords);

//Given an array of objects, return a new array containing only the values of a specific property.

const people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}];
// Expected output (extracting 'name'): ['Alice', 'Bob', 'Charlie']
const newPeople=people.map((item)=>{
    return item.name;
});
console.log(newPeople);


//Given an array of strings, use forEach to log each string to the console.

const fruits = ['apple', 'banana', 'cherry'];
// Expected output: 'apple', 'banana', 'cherry' (each on a new line)

fruits.forEach((item)=>{
    console.log (item);
});

//Given an array of numbers, use forEach to calculate and log the total sum of the numbers.
const number = [10, 20, 30, 40];
// Expected output: 100
let sum=0;
number.forEach(item=>{
    sum +=item;
});
console.log(sum);

//Given an array of strings, use forEach to append a specific suffix to each string and store the results in a new array.
const colors = ['red', 'green', 'blue'];
const suffix = ' color';
const colorsSuffix=[];
// Expected output: ['red color', 'green color', 'blue color']
colors.forEach(item=>{
    colorsSuffix.push(item+suffix);
})
console.log(colorsSuffix);

   





