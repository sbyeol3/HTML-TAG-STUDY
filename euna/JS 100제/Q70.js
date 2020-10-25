const a = [[1, 2],[2, 4]];
const b = [[1, 0],[0, 3]];

function solution(a,b){
  let result = [];
  if (a[0].length !== b.length){
    return -1;
  }
  else{
    for (let i=0;i<a[0].length;i++){
      let row=[];
      for(let j=0;j<a[0].length;j++){
        let x=0;
        for(let k=0;k<a[0].length;k++){
          x+=a[i][k]*b[k][j];
        }
        row.push(x);
      }
      result.push(row);
    }
    return result;
  }
}

console.log(solution(a,b));