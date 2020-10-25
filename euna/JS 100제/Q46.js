const num='1234567891011121314151617181920';
const arr = num.split('');
let sum = 0;
arr.forEach((n) =>{
  sum+=Number(n);
})
console.log(sum);