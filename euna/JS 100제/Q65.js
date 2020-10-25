const a = [1,2,3,4];
const b = ['a','b','c','d'];
let arr=[];
let temp=[];
for ( let i in a ){
  temp.push(a[i]);
  temp.push(b[i]);
  arr.push(temp);
  temp=[];
}
console.log(arr);