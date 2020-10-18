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
