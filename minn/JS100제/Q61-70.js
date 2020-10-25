//Q61

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

//Q62

const user_s = 'aacdddddddddfffffffffgghhh';
let result_s = '';
console.log(`${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${user_s.match(/f/g).length}${user_s.match(/g/g).length}${user_s.match(/h/g).length}`);

//Q63

const str = prompt('문자열을 입력하세요').split(' ');
let result = '';

for (let s of str){
  result += s.slice(0, 1);
}

console.log(strt);

//Q65

const a = prompt("첫번째 배열").split(" ");
const b = prompt("두번째 배열").split(" ");

const mixArr = a.map((item, index) => [item, b[index]]);
console.log(mixArr);

//Q67

function solution(n){
    let ppl = 0;
    let num = 0;
    let temp = 0;
    while(true){
      num = parseInt((ppl*(ppl-1))/2, 10);
      if(n < num){
        break;
      }
      temp = num;
      ppl += 1;
    }
    return [parseInt(n-temp, 10), ppl];
  }
  
  const answer = 59;
  console.log(solution(answer));

  //Q70

  function solution(a, b) {
    let c = [];
    const len = a.length;

    if (len === b[0].length){
        for(let i=0; i<len; i++){
            let row = [];
            for(let j=0; j<len; j++){
                let x = 0;
                for(let k=0; k<len; k++){
                    x += a[i][k]*b[k][j];
                }
                row.push(x);
            }
            c.push(row);
        }
        return c;
    } else {
        return -1;
    }
}

const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

console.log(solution(a, b));