# ```<meta>``` 태그
> 2020.09.12

* 해당 문서에 대한 정보인 메타데이터(metadata)를 정의할 때 사용  
(ex. 페이지의 설명 요약, 핵심 키워드, 제작자, 크롤링 정책 등)
* 닫는 태그가 없으며, 태그의 속성을 통해 정보 제공
* ```<head>``` 태그 내부에 위치

# ```<meta>``` 태그 속성

## **charset** 속성 
: 문자 세트 지정(인코딩 방식 선언), ```<title>``` 이전에 선언 해야함

```javascript
<meta charset="utf-8">
```

## **http-equiv** 속성 
: HTTP 헤더와 같은 값을 지정(적절한 헤더를 제공하여 클라이언트와 서버 사이의 작업 효율성 증가)

```javascript
<meta http-equiv="content-type" content="text/html; charset=utf-8">
```
* 문자 인코딩 방식을 지정, charset 속성의 대체 형식, 문자 인코딩 방식 선언은 한 번만 이루어져야 함.

```javascript
<meta http-equiv="default-style" content="phone"> 
<link rel="stylesheet" href="phone.css" title="phone"> 
<link rel="stylesheet" href="desktop.css" title="desktop">
```
* 기본 스타일 시트를 지정, link 요소의 title 속성값을 content 속성으로 지정하며 해당 link 요소의 스타일 시트가 기본이 됨.

```javascript
<meta http-equiv="refresh" content="60; url=example.html"> <meta http-equiv="refresh" content="60">
```
* 문서의 새로고침을 지정. 속성값은 초 단위의 숫자, url을 지정하면 새로고침과 동시에 해당 url에 있는 문서로 자동 이동함.

```javascript
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
* IE8이 개발되면서 생긴 호환성 모드에 대응하기 위한 속성. IE=edge는 항상 최신의 표준엔진을 사용해 렌더링하게 함. 

## **name** 속성
: metadata의 이름 지정, name과 content는 한 쌍으로 작성되는데 name에는 이름, **content에는 속성 값**을 작성함.

```javascript
<meta name="description" content="현재 페이지의 요약글, 설명">
```

| name 값 | 설명 |
| :--- | :---: |
| application-name | 웹 애플리케이션의 이름을 지정 |
| author | 저작자의 이름을 지정 |
| description | 문서 설명을 지정, 검색 엔진은 이 문서 설명을 검색 결과로 보여줌 |
| generator | 문서 작성에 사용한 제작 도구 지정 |
| keyword | 문서 내용과 관련 있는 키워드 지정, 콤마를 사용하여 복수의 키워드 제공 가능 |
| viewport | 다양한 기기들의 화면 크기를 제어 |

```javascript
<meta name="viewport" content="width=device-width, initial-scale=1" />
```
* viewport의 content 속성 값

| 속성 값 | 설명 |
| :--- | :---: |
| user-scalable=no | 사용자의 확대보기 허용 여부(yes/no) |
| intial-scale=1.0 | 페이지 로딩시 확대비율 |
| maximum-scale=1.0 | 최대확대비율 |
| minimum-scale=1.0 | 최소축소비율 |
| width=device-width | 문플랫폼 가로 크기에 맞춤, 수치를 넣으면 그수치에 맞게 맞춰짐. |


# ```<button>``` 태그
* 클릭할 수 있는 버튼을 정의할 때 사용

# ```<button>``` 태그 속성

## **type** 속성
: button 요소에 type을 지정하지 하지 않으면 기본적으로 submit 수행함. 스크립트 동작을 원할 경우 type 지정해야함.

* button : 단순 버튼 형태로 클릭시 form 태그를 submit하지 않음
* submit : 클릭할 경우 form 태그의 action 속성의 위치로 submit됨. 
* reset : 전송 값들을 초기화함. 

```javascript
<button type="submit">확인</button>
```

## **formtarget** 속성
: 창이 열릴 곳 / 이 속성은 target 속성 무시

* _self : 현재창
* _blank : 새로운 창을 만듦.
* _parent : 상위 프레임에 나타남.

```javascript
<button type="button" formtarget="_self">test<button>
```
## ```<input type="submit">``` VS ```<button>```

: 기능적으로 동일. 하지만 button은 내용을 가질 수 있으며 텍스트 뿐만이 아니라 이미지 요소를 자식으로 포함할 수 있음.


---

**참고자료**
> https://webdir.tistory.com/308

> https://alonehistory.tistory.com/7

> http://dailylife8282.blogspot.com/2016/10/inputtypebutton-button.html

> https://aboooks.tistory.com/301
(더 많은 버튼 속성)

> https://webisfree.com/2015-02-12/[html]-%EB%B2%84%ED%8A%BC-%ED%83%9C%EA%B7%B8-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-button-tag



