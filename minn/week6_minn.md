## ```<li>``` 태그
> 2020.09.27

* list의 약자로, 목록을 만드는 태그 
* 단독으로 쓰이지 않으며 ```<ul>,<ol>``` 태그 내부에 들어감. 
* 이중 리스트를 만들 떄는 ```<ul>,<ol>``` 하위에 다시 ```<ul>,<ol>``` 태그를 쓰면 됨

### ```<ol>``` 태그
: 번호를 매겨 순서가 있는(ordered) 목록을 만든다. 

### ```<ul>``` 태그
: 순서 없이(unordered) 앞에 모양으로 목록을 만든다. 

```javascript
<ol>
	<li>목록1</li>
	<li>목록2</li>
</ol>
```

## ```<h#>``` 태그

* ```<h1>,<h2>,<h3>,<h4>,<h5>,<h6>``` 태그
* 섹션, 문단의 제목을 나타내며 숫자가 작을수록 글자의 크기가 커짐
* 단순히 글자의 크기 뿐만 아니라, 검색엔진이 문서를 파악하기 위해 쓰이므로 상황에 맞게 <h#>을 잘 써주는 것이 중요함.
(h1에 키워드 넣기, 한번만 사용)
* ```<h>``` 태그는 제목을 나타내는 코드이기 때문에 문단의 처음에 배치, 꾸미기에는 사용하지 않는게 좋음

## 시맨틱 태그 - 레이아웃 

* 시맨틱 태그: 웹페이지의 구조를 쉽게 이해할 수 있도록 정의된 태그. 

| 태그 | 설명 |
| :--- | :---: |
| ```<header>``` | 머리글 지정, 일반적으로 로고, 제목 태그 및 nav 태그를 포함 |
| ```<nav>``` | 동일 사이트 내 다른 페이지의 문서로 연결하는 링크의 모음, 주로 메뉴에 사용됨 |
| ```<section```> | 주제별 콘텐츠 영역을 나타냄. 제목으로 콘텐츠를 그룹핑 |
| ```<article>``` | 콘텐츠의 실제 내용을 포함하는 영역. 개별 문서의 제목과 본문 정의. |
| ```<aside>``` | 본문 이외의 내용을 표시하는 사이드바 영역. 주로 광고나 링크. 메인 내용과 직접적 연관이 없는 내용으로 구성 |
| ```<footer>``` | 주로 하단에 위치하여 제작 정보, 회사소개, 약관, 저작권 정보등을 포함하는 영역 |

![](https://mblogthumb-phinf.pstatic.net/MjAxNzEyMjVfMTA4/MDAxNTE0MTM1NzM5MDM2.RohWGB3ObHBOfrNDsy7xx720pTXUo85vExaTstvlpsIg.24wSBGwJGqIQLCaMak2RY3G4HT13KmaCoXqGoXPjac4g.PNG.heartflow89/image.png?type=w800)










**참고자료**
> https://ofcourse.kr/html-course/li-%ED%83%9C%EA%B7%B8

> https://ofcourse.kr/html-course/hn-%ED%83%9C%EA%B7%B8

> https://mingtrace.tistory.com/492

> https://m.blog.naver.com/PostView.nhn?blogId=heartflow89&logNo=221170465007&proxyReferer=https:%2F%2Fwww.google.com%2F