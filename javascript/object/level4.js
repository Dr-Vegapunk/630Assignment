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