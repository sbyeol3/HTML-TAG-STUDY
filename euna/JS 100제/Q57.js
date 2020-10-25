let str = '';
for (let i=0; i<=1000; i++){
  str += i;
}
const arr=str.split('');
var result = arr.filter(n => n === '1').length;
console.log(result);
