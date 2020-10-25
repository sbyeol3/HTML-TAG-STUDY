//Q41

const num = prompt("숫자를 입력하세요");

function solution(num) {
  for(let i=2; i<num; i++){
    if(num % i === 0){
      console.log('NO');
      return;
    }
  }

  if(num===1){
    console.log('NO');
    return;
  }
  console.log('YES');
}

solution(num);

//Q42

const month = prompt('월을 입력하세요');
const date = prompt('일을 입력하세요');

function solution(a,b){
  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let year = '2020';

  let result = new Date(year+'-'+month+'-'+date);
  return week[result.getDay()];
}

console.log(solution(month,date));

//Q43

const num = Number(prompt('숫자를 입력해주세요'));
console.log(num.toString(2));

//Q44

const num = prompt('숫자를 입력하세요');

function solution(num)
{
    let answer = 0;
    let m=String(num);

    for(let i=0; i<m.length; i++){
        answer+=parseInt(m[i]);
    }
    return answer;
}

console.log(solution(num));

//Q45

const d = new Date();

let year = d.getTime();
year = Math.floor(year/(3600*24*365*1000))+1970

console.log(year);

//Q46

let arr = [];
let sum = 0;

for (let i=0; i<20; i++){
  arr[i] = i+1;
}

arr.forEach((n) => {
  while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
  }
})

console.log(sum);

//Q47

const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
  };
  
  let result = new Set();
  for (let key in people) {
    result.add(people[key]);
  }
  console.log(result.size);


//Q48

let str = prompt('문자열을 입력하세요');
let arr = [];
let answer = '';

for (let i=0; i<str.length; i++){
  if(str[i] === str[i].toLowerCase()){ 
    arr.push(str[i].toUpperCase());
  } else {
    arr.push(str[i].toLowerCase());
  }
}

for (let j=0; j<arr.length; j++){
  answer += arr[j];
}

console.log(answer);

//Q49

const a = prompt('10개의 숫자를 입력하세요');
var array = a.split(" ");

function getMax() 
{
    return Math.max.apply(null, array);
}

console.log(getMax());

//Q50

function bubble(arr) {
  let result = arr.slice(); // 원본 배열 복사

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
