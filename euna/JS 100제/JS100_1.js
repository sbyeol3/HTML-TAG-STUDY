console.log("1번");
var nums = [100,200,300,400,500];
nums.pop();
nums.pop();
console.log(nums);

console.log("2번");
var arr = [200, 100, 300];
arr.splice(2,0,10000); // 인덱스 2부터 변경, 0개의 요소 삭제, 10000을 넣는다.
//splice(start,deleteCount,item)
//start: 배열 변경 시작 인덱스
//deleteCount: 제거할 요소의 수
console.log(arr);

console.log("3번");
var arr = [100, 200, 300];
var num=1;
console.log(typeof(arr)); //object
console.log(typeof(num)); //number
console.log(typeof("string")); //string
// 답: 4번
//undefined, string, number는 기본 자료형(primitive type)

console.log("4번");
console.log(typeof(2.22)); //number
//답: 2번
//boolean은 true, false

console.log("5번");
var a = 10;
var b = 2;
for(var i=1; i<5; i+=2){
    a += i;
}
console.log(a+b);
//답: 16

console.log("6번");
// null, undefined, 0, 빈문자열, NaN, false를 제외하고는 모두 참으로 표현한다. 
// 1은 true이다.

console.log("7번");
//답: let, 1age
//let은 예약어, 1age 숫자로 시작하는 변수는 불가능하다.
//문자, _, $로 시작하는 식별자만 가능

console.log("8번");
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};
console.log(d['weight']);
//나중에 대입된 값이 적용된다.

console.log("9번");
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
console.log(result);

console.log("10번");
for (var i=1;i<=5;i++){
    var temp="";
    for (var j=1;j<=5-i;j++){
        temp=temp.concat(" ");
    }
    for(var k=1;k<=2*i-1;k++){
        temp=temp.concat("*");
    }
    console.log(temp);
}

console.log("11번");
let s = 0;
//1부터 100까지 더하기
for (var i=1; i<=100; i++){
    s += i;
}
console.log(s);

console.log("12번");
class Wizard{
    //생성자
    constructor (health,mana,armor){
        this.health=health;
        this.mana=mana;
        this.armor=armor;
    }
    attack(){
        console.log('파이어볼');
    }
}
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

console.log("13번");
const planet=['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];
//입력이 3일경우
console.log(planet[3-1]);

console.log("14번");
var n=3; //입력 3
if (n%3==0){
    console.log("짝");
}
else{
    console.log(n);
}

console.log("15번");
var name = "김다정"; //입력 김다정
console.log("안녕하세요. 저는 " + name + "입니다.");

console.log("16번");
var str = "거꾸로";
let new_str="";
for (var i=str.length-1; i>=0; i--){
    new_str=new_str.concat(str[i]);
} 
//console.log(new_str);
const reverseString=str.split('').reverse().join('');
// split은 문자열을 배열로 만듦.
//reverse는 배열의 순서 반전
// join은 배열을 문자열로 반환
console.log(reverseString);

console.log("17번");
var height = 165; //키 입력
if(height > 150){
    console.log("YES");
}
else{
    console.log("NO");
}

console.log("18번");
const korean=20;
const math=30;
const english=41;
let avg=Math.floor((korean+math+english)/3);
console.log(avg);

console.log("19번");
var a = 2;
var b = 6;
var ans = 1;
for (var i=0; i<b; i++){
    ans*=a;
}
console.log(ans);
console.log(Math.pow(parseInt(a, 10), parseInt(b, 10)));

console.log("20번");
var a=10;
var b=2;
ans=Math.floor(a/b)+" "+a%2;
console.log(ans);

console.log("21번");
//set을 만드는 방법
var set1=new Set('javascript');
var set2=new Set();
//var set3=new Set([1,1,2,2,3,3]); ->{1,2,3}으로 담김.
console.log(set1);
//답: 3,5번

console.log("22번");
//num22가 6의 배수인지 확인하는 방법
var num22=36;
if (num22%6==0){
    console.log(num22+"는 6의 배수입니다.");
}
//답 : 2번

console.log("23번");
console.log(10/3)
//답: X
//출력결과는 3.3333333~
//Math.floor(x)를 이용한다.

console.log("24번");
name="mary";
console.log(name.toUpperCase());

console.log("25번");
function circle(x){
    result=x*x*3.14;
    return result;
}
console.log(circle(5));

console.log("26번");
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};
name="화성";
console.log(planets[name]);

console.log("27번");
//const keys = prompt('이름을 입력하세요').split(' ');
//const values = prompt('점수를 입력하세요').split(' ');
const keys = ["민지", "수현"];
const values = [50,60];
const obj = {};
for (let i=0; i<keys.length; i++) {
  obj[keys[i]] = parseInt(values[i], 10);
}
console.log(obj);

console.log("28번");
const str28="Javascript";
for (var i=0; i<str28.length-1; i++){
    console.log(str28[i], str28[i+1]);
}

console.log("29번");
const str29 = "J";
if (str29 == str29.toUpperCase()){
    console.log('YES');
}
else{
    console.log('NO');
}

console.log("30번");
str30 = "pineapple is yummy";
word = "apple";
console.log(str30.indexOf(word));
// indexOf()메서드는 주어진 값과 일치하는 요소의 첫번째 인덱스를 반환
// 없으면 -1 반환

console.log("31번");
//답: 3,5번
//slice()와 includes(x)의 경우 O(n)의 복잡도를 가짐

console.log("32번");
const str32 = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";
console.log(str32.split(' ').length);
//split을 이용해 스페이스를 기준으로 단어들을 배열에 담는다.

console.log("33번");
const str33 = "1 2 3 4 5";
console.log(str33.split(" ").reverse().join(" "));

console.log("34번");
const str34="176 156 155 165 166 169";
let new_str34 = str34.split(" ").sort(function(a,b){
    return a-b;
}).join(" ");
if (str34 == new_str34){
    console.log("YES");
}
else{
    console.log("NO");
}
//자바스크립트에서 오름차순 정렬을 하기 위해서는 function을 사용해야함.

console.log("35번");
//Factory 함수 사용하기
function one(n){
    function two(value){
        const sq = Math.pow(value, n);
        return sq;
    }
    return two;
}
//inner function
const num35_1 = one(2);
const num35_2 = one(3);
const num35_3 = one(4);

console.log(num35_1(10));
console.log(num35_2(10));
console.log(num35_3(10));

console.log("36번");
const num36 = 6;
let result36='';
for (var i=1; i<=9; i++){
    result36 += num36*i + ' ';
}
console.log(result36);

console.log("37번");
const str37 = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
const arr37 = str37.split(' ');
const result37 = {};
for (var i in arr37){
    if (arr37[i] in result37){
        result37[arr37[i]]+=1;
    }
    else{
        result37[arr37[i]] = 1;
    }
}
winner = Object.keys(result37).reduce(function(a, b){
    return result37[a] > result37[b] ? a : b
  });
console.log(`${winner}이가 총 ${result37[winner]}표로 반장이 되었습니다.`);

console.log("38번");
arr38 = "97 86 75 66 55 97 85 97 97 95".split(' ').map(function(n){
    return parseInt(n, 10);
});
arr38.sort((a,b)=>{
    return a-b;
});
console.log(arr38);
let count = 0;
let new_arr38=[];
while (new_arr38.length<3){
    let n = arr38.pop();
    if (!new_arr38.includes(n)){
        new_arr38.push(n);
    }
    count+=1;
}
console.log(count);

console.log("39번");
str39 = "hqllo my namq is hyqwon";
console.log(str39.split('q').join('e'));

console.log("40번");
const weight = 50;
const num40 = 5;
const arr40 = [20,20,10,20,20];
let sum40 = 0;
let count40 = 0;
for (var i in arr40){
    sum40 += arr40[i];
    if (sum40 <= weight){
        count40++;
    }
    else{
        break;
    }
}
console.log(count40);