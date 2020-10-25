const arr = ["12:30", "13:20", "14:13"];
const time = "12:40";
let result= [];

for (let i in arr){
  time_a=parseInt(arr[i].slice(0,2))*60+parseInt(arr[i].slice(3));
  time_b=parseInt(time.slice(0,2))*60+parseInt(time.slice(3));
  if (time_a < time_b) {
    result.push('지나갔습니다');
  }
  else{
    let hour = Math.floor((time_a-time_b)/60);
    let min = Math.floor(time_a-time_b-60*hour);
    result.push(`${hour}시간 ${min}분`);
  }
}
console.log(result);