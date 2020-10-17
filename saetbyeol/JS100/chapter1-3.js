/* 
문제 21 : set은 어떻게 만드나요?
다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();
*/

const ans21 = [3, 5];

/*
문제22 : 배수인지 확인하기
다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1)  i / 6 == 0
2)  i % 6 == 0
3)  i & 6 == 0
4)  i | 6 == 0
5)  i // 6 == 0
*/

const ans22 = 2;

/*
문제 23 : OX 문제
`console.log(10/3)`의 출력 결과는 **3**이다.
*/

const ans23 = false;

/*
문제 24 : 대문자로 바꿔주세요!
이름이 입력되면 전부 대문자로 출력되는 프로그램
*/

const ans24 = (name) => {
  if (typeof name !== 'string') return ;
  return name.toUpperCase();
}

/*
문제 25 : 원의 넓이를 구하세요
입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수
*/

const ans25 = (radius) => {
  return (radius ** 2) * 3.14;
}

/*
문제 26 : 행성 문제2
우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
*/

const palentObject = {
  수성: 'Mercury',
  금성: 'Venus',
  지구: 'Earth',
  화성: 'Mars',
  목성: 'Jupiter',
  토성: 'Saturn',
  천왕성: 'Uranus',
  해왕성: 'Neptune'
}

const ans26 = (koreanWord) => { return palentObject[koreanWord] }

/*
문제 27 : 객체 만들기
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
*/

const ans27 = (input) => {
  const [name, score] = input.split(' ');
  console.log({[name]: +score});
}

/*
문제 28 : 2-gram
*/

const ans28 = (str) => {
  const arr = [...str];
  arr.forEach((ch, idx) => {
    if (idx === arr.length - 1) return;
    console.log(`${ch} ${arr[idx+1]}`)
  })
}

/*
문제 29 : 대문자만 지나가세요
알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램
*/

const ans29 = (ch) => {
  return ch.toUpperCase() === ch ? 'YES' : 'NO';
}

/*
문제 30 : 문자열 속 문자 찾기
문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
**그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요
*/

const ans30 = (input) => {
  const [str, searchWord] = input.split(' ');
  return str.indexOf(searchWord);
}
