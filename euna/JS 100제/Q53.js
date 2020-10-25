function solution(str){
    let arr = [];
    for (let i in str){
      if (str[i] =='(') {
        arr.push('(');
      }
      else if(str[i] == ')'){
        if (arr.length == 0){
          return false;
        }
        arr.pop();
      }
    }
    if (arr.length !=0){
      return false;
    }
    return true;
  }
  
  const n = prompt('입력해주세요.').split('');
  
  if (solution(n) === true) {
      console.log('YES');
  } else {
      console.log('NO');
  }