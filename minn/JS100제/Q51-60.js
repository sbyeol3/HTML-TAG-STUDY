//Q51

function mergeSort(arr){

    if (arr.length <= 1){
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
  
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right){
    let result = [];
  
    while (left.length && right.length){
      if (left[0] < right[0]){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
  
    return result;
  }
  
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  
  console.log(mergeSort(array));
  
//Q52

function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0]; //기준점
    const left = [];
    const right = [];
  
    for (let i=1; i<arr.length; i++){
      if(arr[i] < pivot){ 
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(quickSort(array));

//Q53

function math(e){
    let count = 0;
    
    //괄호 개수가 같지 않으면 false
    for (let i=0; i<e.length; i++){
        if (e[i] === '('){
            count++;
        }
        if (e[i] === ')'){
            count--;
        }
    }
    if (count !== 0){
        return false;
    }
    
    let 괄호 = [];
    for (let i in e){
        if (e[i] === '(') {
            괄호.push('(');
        }
            
        if (e[i] === ')') {
            if (괄호.length === 0) {
                return false;
            }
            괄호.pop();
        }   
    }
    return true;
}
    

const n = prompt('입력해주세요.').split('');

if (math(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}

//Q54

function sol(l){
    l.sort((a,b) => {
      return a-b;
    });
  
    for (let i=0; i<l.length-1; i++){
      if(l[i]+1 !== l[i+1]){
        return 'NO';
      }
    }
    return 'YES';
  }
  
  const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(sol(n));

//Q55

const route = [];

function hanoi(num, start, end, temp){

  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  hanoi(num-1, start, temp, end);
  route.push([start, end]);
  hanoi(num-1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);

//Q56

const nationWidth = {
	'korea': 220877,
	'Rusia': 17098242,
	'China': 9596961,
	'France': 543965,
	'Japan': 377915,
	'England' : 242900,
};

const w = nationWidth['korea'];

delete nationWidth['korea'];

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

let gap = Math.max.apply(null, values);
let item = [];

for (let i in entry){
  if (gap > Math.abs(entry[i][1] - w)){
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}

console.log(item[0],item[1]-220877);

//Q57

let s ='';
for (let i = 0; i<1001; i++) {
  s += i;
}
let count = 0;
for (let k of s) {
  if(k==1) {
    count++;
  }
}
console.log(count);

//Q58

const inputNumber = Number(prompt('숫자를 입력하세요'));

function numberFormat(inputNumber) {
   return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(numberFormat(inputNumber));

//Q59

const str = prompt('문자열을 입력해주세요');

const n = 25+parseInt((str.length/2), 10);
const a = str.padStart(n, '='); 
console.log(a.padEnd(50,'='));

//Q60

const students = [
    '강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호',
    '김진이','김민호','강채연'];
    
    students.sort();
    
    for (let key in students){
      console.log(`번호: ${parseInt(key, 10)+1}, 이름: ${students[key]}`);
    }





  
