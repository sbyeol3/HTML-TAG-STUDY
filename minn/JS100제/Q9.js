var year = '2019';
var month ='04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
var result = year.concat('/', month, '/', day,' ', hour ,':' , minute, ':', second);

console.log(result);

//concat: 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 return
//nested array(배열 안의 배열) 를 합칠 때는 1 depth 만 적용이 된다.