/*
문제 31 : 자바스크립트 자료형의 복잡도
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1)  arr[i]
2)  arr.push(5)
3)  arr.slice()
4)  arr.pop()
5)  arr.includes(5)
*/

const ans31 = [3, 5];

/*
문제 32 : 문자열 만들기
문자열을 입력받으면 단어의 갯수를 출력하는 프로그램
*/

const ans32 = (str) => {
  const arr = str.split(' ');
  return arr.length;
}

/*
문제 33 : 거꾸로 출력하기
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
*/

const ans33 = (input) => {
  console.log(input.split(' ').reverse().join(' '));
}

/*
문제 34 : sort 구현하기
민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)
*/

const ans34 = (input) => {
  const heights = input.split(' ').map((data) => { return +data; })
  const result = heights.every((height, idx) => {
    if (idx === 0) return true;
    return height >= heights[idx-1]
  })
  return result ? 'YES' : 'NO';
}

/*
문제 35 : Factory 함수 사용하기
*/

function one(n){
    function two(value){
        return n ** value
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);


/*
문제 36 : 구구단 출력하기
1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.
*/

const ans36 = (num) => {
  const answer = Array(9).fill(1).reduce((prev, n, idx) => {
    return prev + ` ${(idx + 1) * num}`;
  }, '');
  console.log(answer);
}

/*
문제 37 : 반장 선거
학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램
*/

const ans37 = (input) => {
  const votes = input.split(' ');
  const candidates = {};
  votes.forEach((name) => {
    candidates[name] ? candidates[name] += 1 : candidates[name] = 1;
  })
  let max = 0;
  let selected = '';
  Object.entries(candidates).forEach((candidate) => {
    const [name, vote] = candidate;
    console.log(candidate)
    if (vote > max) {
      max = vote;
      selected = name;
    }
  })

  console.log(`${selected}(이)가 총 ${max}표로 반장이 되었습니다.`);
}

/*
문제 38 : 호준이의 아르바이트
1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.
*/

const ans38 = (input) => {
  const scoreArr = input.split(' ');
  const score = {}
  scoreArr.forEach((s) => {
    score[s] ? score[s] += 1 : score[s] = 1;
  })
  const sorted = Object.entries(score).sort().reverse();
  const count = sorted[0][1] + sorted[1][1] + sorted[2][1];
  return count;
}

/*
문제 39 : 오타 수정하기
문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.
*/

const ans39 = (str) => {
  return str.replace(/q/g, 'e');
}

/*
문제 40 : 놀이동산에 가자
테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.
*/

const ans40 = (limit, weights) => {
  const sorted = weights.sort();
  let current = 0;
  let cnt = 0;
  for (w of weights) {
    if (current + w > limit) break;
    current += w;
    cnt++;
  }
  return cnt;
}
