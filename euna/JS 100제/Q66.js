function solution(blocks, rule){
    let answer = [];
    for (let block of blocks){
      answer.push(check(block, rule));
    }
    return answer;
  }
  
  function check(block, rule){
    let temp = rule.indexOf(rule[0]);
    for (let i of block){
      if (rule.includes(i)){
        if (temp > rule.indexOf(i)){
          return '불가능';
        }
        temp = rule.indexOf(i);
      }
    }
    return '가능';
  }
  
  const blocks = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
  const rule = 'ABCD';
  
  console.log(solution(blocks, rule));
  //["가능", "불가능", "가능", "가능", "불가능"]