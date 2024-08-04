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
