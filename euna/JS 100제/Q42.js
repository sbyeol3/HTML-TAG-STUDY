const month = prompt('월을 입력하세요.');
const date = prompt('일을 입력하세요.');

function solution(a,b){
  const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

  const x=new Date('2020-'+a+'-'+b);
  console.log(x.getDay());
  return day[x.getDay()];
}
console.log(solution(month, date));