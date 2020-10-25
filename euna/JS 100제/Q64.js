let N = parseInt(prompt('정량을 입력하세요'), 10);
let result = 0;

while(true){
  if (N%7==0){
    result += N/7;
    console.log(result);
    break;
  }
  N -= 3;
  result += 1;
  if (N<0){
    console.log(-1);
    break;
  }
}