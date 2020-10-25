const str = 'AAABBBcccddd';
const arr = str.split('');
let result = '';
arr.forEach((i) => {
  if (i==i.toUpperCase()){
    result += i.toLowerCase();
  }
  else{
    result += i.toUpperCase();
  }
})
console.log(result);