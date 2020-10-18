const n = prompt('입력:');
const reverseString = n.split('').reverse().join('');
console.log(reverseString);

//split() = 문자열을 배열로 만들어 반환
//reverse() = 배열의 순서 반전
//join() = 원소를 모두 붙여 문자열로 반환 