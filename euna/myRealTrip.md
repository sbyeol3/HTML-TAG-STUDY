# week 7
## myrealtrip 클론코딩

### header
로고, 검색, 로그인, 회원가입

- header안의 요소들을 가로로 배치하고 싶을 때는 div 클래스를 같은 것으로 묶고, float:left;로 설정한다.
```html

```

```css
.mainHeader{
  float:left;
}
```

- 로그인, 회원가입의 경우 오른쪽부터 배치해야한다. float:right;로 설정한다.
```html
```
```css
```
 * 특정 요소의 float를 해제하고 싶을 경우 clear:both를 사용해야한다.
참조:https://rgy0409.tistory.com/2935


### nav
- h2로 국내여행 떠나볼까요
- li를 이용해 도시 이름 배치, ```display: inline-block;```을 이용하면 가운데정렬 가능
- ```border-radius:15px;```를 이용해 모서리를 둥글게 표현 가능하다.
참조:https://www.codingfactory.net/10957
- button의 hover효과 주는법
```css
button:hover{
  background-color:#f1f3f5;
}
```
