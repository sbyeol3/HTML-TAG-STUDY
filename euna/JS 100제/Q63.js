const str = '복잡한 세상 편하게 살자';
const arr = str.split(' ');
let word = '';
for ( let i in arr ){
  word+=arr[i][0];
}
console.log(word);