function solution(n){
    let people=0;
    let sum=0;
    let temp=0;
    while(true){
      sum=(people*(people-1))/2;
      if (n<sum){
        break;
      }
      temp=sum;
      people+=1;
    }
    return [n-temp, people];
  }
  
  const num=59;
  console.log(solution(num));