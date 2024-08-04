const arr = ['ram','shyam','hari']

const arr1=arr.filter(item=>{
    return item!='shyam';
})
console.log(arr1);
//Q1
//remove shyam
// expected output 
// ['ram', 'hari']
//syntax
//const output = arr.filter(()=>{

// })
//console.log(output)
//Q2 count total strings which have length 4
//expected output : 1
let total = 0
arr.forEach((item,id)=>{
    if (item.length===4){
        total +=1;
    }
    // yedi item.length === 4, total ma add 1
    
})
console.log(total);

// high level
// Q3 
// expected output: 12
// count total characters in all the strings in the array
let strCount = 0
arr.forEach((item,id)=>{
    strCount +=item.length
    // // add item.length  to strCount
})
console.log(strCount)

const cartItems=[
    {id: 1, product:"hawkins", price:30, quantity:1},
    {id: 1, product:"baltra", price:10, quantity:3},
    ]
    
    //60
 let totalPrice=0
    const cartItemss=cartItems.map(item=>{
        return totalPrice +=item.price * item.quantity
    })
    console.log(totalPrice);

// Q4 using map, get the last characters
const lastOutput = arr.map((item)=>{
    return item[item.length-1];
    
}).reduce((acc,curr)=>{
    if (!acc.includes(curr))
        acc.push(curr);
    return acc;
}, []);

console.log(lastOutput)
//['m','m','i']