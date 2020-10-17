/* 
문제 1 : 배열의 삭제
다음 배열에서 400, 500를 삭제하는 코드를 입력
입력 : [100, 200, 300, 400, 500]
*/

const nums = [100, 200, 300, 400, 500];
const ans1 = nums.filter((num) => {return (num !== 400 && num !== 500);} );

/* 
문제 2 : 배열의 내장함수
입력 : [200, 100, 300]
출력 : [200, 100, 10000, 300]
*/

const q2 = [200, 100, 300];
const insertedNum = 10000;
const ans2 = q2.reduce((prev, data, idx) => {
  if (idx === 2) return [...prev, insertedNum, data];
  return [...prev, data];
}, []);

/* 
문제 3 : 변수의 타입
const arr = [100, 200, 300];
console.log(typeof(arr)); // 답은?
*/

const ans3 = 'object';

/* 
문제 4 : 변수의 타입 2
typeof(a)의 답으로 알맞지 않은 것은?
1) in: a=1, out: number
2) in: a=2.22, out: boolean
3) in: a='p', out: string
4) in: a=[1,2,3], out: object
*/

const ans4 = 2;

/* 
문제 5 : for문 계산
다음 코드의 출력 값은?

const a = 10;
const b = 2;

for(const i=1; i<5; i+=2){
  a += i;
}

console.log(a+b);
*/

const ans5 = 14;

/* 
문제 6 : False
자바스크립트 문법 중에서 False로 취급하지 않는 값은?
1) NaN
2) 1
3) ""
4) 0
5) undefined
*/

const ans6 = 2;

/* 
문제 7 : 변수명
변수명으로 사용할 수 없는 것 2개
1) age
2) &age
3) let
4) _age
5) 1age
*/

const ans7 = [3, 5];
// sol : 자바스크립트에서 변수명을 설정할 때 숫자로 시작할 수 없다.

/* 
문제 8 : 객체의 키 이름
*/

const ans8 = 84;

/* 
문제 9 : concat을 활용한 출력
출력 : 2019/04/26 11:34:27
*/

const year = '2019';
const month = '04';
const day = '26';
const hour = '11';
const minute = '34';
const second = '27';

const ans9 = year.concat(`/${month}`).concat(`/${day}`).concat(` ${hour}`).concat(`:${minute}`).concat(`:${second}`);
// concat을 쓰지 않는다면
const ans9_1 = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

/* 
문제 10 : 별찍기
정수를 입력으로 받아 트리를 출력하는 함수 작성
*/

const ans10 = (num) => {
  if (typeof num !== 'number') return;
  const lastLenth = num * 2 - 1;
  const halfLength = (lastLenth - 1) / 2;
  for (let i = 1; i <= lastLenth; i += 2){
    const empty = (i - 1) / 2;
    console.log(' '.repeat(halfLength - empty) + '*'.repeat(i));
  }
}
