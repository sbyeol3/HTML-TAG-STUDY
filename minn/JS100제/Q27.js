const keys = prompt('이름을 입력하세요').split(' ');
const values = prompt('점수를 입력하세요').split(' ');
const obj = {};

for (let i=0; i<keys.length; i++) {
  obj[keys[i]] = parseInt(values[i], 10);
}

console.log(obj);