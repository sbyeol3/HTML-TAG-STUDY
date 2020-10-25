const num = prompt();
let sum = 0;
let temp = num;
for (var i=num.length-1; i>=0; i--){
  sum += Math.floor(temp/Math.pow(10,i));
  temp = temp%Math.pow(10,i);
}
console.log(sum);