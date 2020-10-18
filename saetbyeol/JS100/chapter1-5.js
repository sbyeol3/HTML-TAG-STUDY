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
  문제 4 :
   */
  
  /*
  문제 4 :
   */
  
  /*
  문제 4 :
   */
  
  /*
  문제 4 :
   */
  
  /*
  문제 4 :
   */