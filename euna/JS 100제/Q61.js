const user_input = new String(prompt('문자열을 입력하세요'));
let s = '';
let storeString = user_input[0];
let count = 0;

for (let i of user_input){
  if (i === storeString){
    count += 1;
  } else{
    s += storeString + String(count);
    storeString = i;
    count = 1;
  }
}

s += storeString + String(count);
console.log(s);