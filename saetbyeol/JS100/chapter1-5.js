/*
문제 41 : 소수판별
숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/

const ans41 = (num) => {
    if (typeof num !== 'number' || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  /*
  문제 42 : 2020년
  2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
  두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
  요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.
  
  예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.
  
  **제한 조건**
  2020년은 윤년입니다.
  2020년 a월 b일은 실제로 있는 날입니다. 
  (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
   */
  
  const ans42 = (a, b) => {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = `2020-${a}-${b}`;
    const idx = new Date(date).getDay();
    return week[idx];
  }
  
  /*
  문제 43 : 10진수를 2진수로
  사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.
   */
  
  const ans43 = (num) => {
    return num.toString(2);
  }
  
  /*
  문제 44 : 각 자리수의 합
  사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램
   */
  
  const ans44 = (num) => {
    const arr = num.toString().split('');
    return arr.reduce((prev, ch) => {
      return prev + +ch;
    }, 0)
  }
  
/*
문제 45 : getTime() 함수 이용하기
Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 현재 연도를 출력해보세요.
 */

const ans45 = () => {
  const now = new Date().getTime();
  const YEAR = 1000 * 60 * 60 * 24 * 365;
  console.log(Math.floor(now / YEAR + 1970));
}

/*
문제 46 : 각 자리수의 합 2
1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
 */

const ans46 = () => {
  let sum = 0;
  for (let i = 1; i <= 20; i++) {
    const num = i.toString().split('');
    sum += num.reduce((prev, digit) => {
      return prev + +digit;
    }, 0)
  }
  return sum;
}

/*
문제 47 : set 자료형의 응용
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};
 */

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};

const ans47 = () => {
  const set = new Set(Object.values(people));
  return set.size;
}

/*
문제 48 : 대소문자 바꿔서 출력하기
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
 */

const ans48 = (str) => {
  return str.split('').reduce((prev, ch) => {
    if (ch === ch.toLowerCase()) return prev + ch.toUpperCase();
    else return prev + ch.toLowerCase();
  }, '')
}

/*
문제 49 : 최댓값 구하기
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
 */

const ans49 = (arr) => {
  return arr.reduce((prev, data) => {
    if (prev < data) return data;
    return prev;
  }, 0);
}

/*
문제 50 : 버블정렬 구현하기
버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
 */

function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i+1; j <result.length; j++) {
      if (result[j] > result[j + 1]) {
         const temp = result[j];
         result[j] = result[j + 1];
         result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));