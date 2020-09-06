# \<a> 태그
> 2020.08.28

* 문서를 링크 시키기 위해 사용하는 태그

## \<a>태그의 속성 사용법

**href** : 연결할 주소를 지정한다.

* 절대 경로 url 
```javascript
<a href="https://www.naver.com">네이버로 이동</a> 
```
* 상대 경로 url : 같은 프로젝트 폴더 내의 경로
```javascript
<a href="main.html/">메인으로 이동</a> 
```
* 엘리먼트ID를 이용한 url : 같은 문서 내의 엘리먼트ID
```javascript
<div id="copyright">copyright </div> 
<a href="#copyright">copyright로 이동하기</a>
```
* 자바스크립트 함수 호출
```javascript
<a href="javascript:alert('알림');">알림</a>
```

**target** : 링크를 클릭할 때 창을 어떻게 열지 설정한다. 

```javascript
<a href="https://www.naver.com"target="_blank">네이버로 이동</a> 
```

* _self : 링크를 클릭한 해당 창에서 연다.
* _blank : 링크를 새 창으로 연다.
* _parent : 부모 창에서 연다. (부모 창이 없으면 _self 속성으로 처리)
* _top : 전체 브라우저 창에서 가장 상위의 창에서 연다. 

**title** : 해당 링크에 마우스 커서를 올릴 때 도움말 설명을 설정한다. 

```javascript
<a href="https://www.naver.com"title="네이버">네이버로 이동</a> 
```

# \<span> 태그
>2020.08.28

* 스타일을 적용시키기 위한 영역을 지정할 때 사용

## \<span> 태그의 기본 속성

* display : 디스플레이 요소 변경 (default: inline)
* width, height : 가로, 세로 크기 지정 (dispaly를 block으로 바꿔야함)
* background-color : 배경색 지정
* color : 글자색 지정
* font-style : 글자 폰트 지정
* margin, padding : 외부, 내부 공백 크기 설정 
* border : 테두리 설정 

```javascript
<span style="background-color: green;">hello world!</span>
```

# \<p> 태그 
>2020.08.28

* 'paragraph'의 약자로, 하나의 문단을 만들 때 쓰임

```javascript
<p>first paragraph</p>
```

## \<p> \<div> \<span> 차이점

* display 요소는 Block, Inline 두개로 나뉨
1. Block-level 
태그 스스로가 가지고 있는 고유 공간이 있다. 그래서 가로, 세로 사이즈 조절이 가능하다.  
ex) \<div>, \<p>, \<footer>, \<main> 등  

2. Inline-level
스스로 가지고 있는 공간이 없이 내용에 따라서 공간이 정해진다. 그래샤 가로, 세로 사이즈 조절이 불가능하다.   
ex) \<span>, \<script>, \<var> 등







**참고자료**
> https://electronic-moongchi.tistory.com/87

> https://techman-tooltip.tistory.com/139

> https://m.blog.naver.com/PostView.nhn?blogId=pungwun&logNo=220501759403&proxyReferer=https:%2F%2Fwww.google.com%2F

> https://miaow-miaow.tistory.com/94




