# 🧩 `<meta>` 태그 분석

HTML 문서에 대한 메타데이터를 정의하는 태그로 head 엘리먼트 내에 있다.<br>
페이지에서 보여지지는 않지만 브라우저나 서치엔진이 파싱하여 읽는다.

## 속성

attribute | value | description
--- | --- | ---
charset | *character_set* | HTML 문서의 인코딩 방식
content | *text* | http-equiv나 name에 해당하는 value
http-equiv | content-security-policy<br> content-type<br> default-style<br> refresh
name | 	application-name<br>author<br>description<br>generator<br>keywords<br>viewport| 메타데이터의 이름을 정의

## 종류

### name
- keywords : 서치 엔진에 의해 검색되는 단어
- description : 페이지의 설명, 검색결과에 표시되는 문자열
- author : 문서의 저자
- viewport : 뷰포트 설정, 반응형 웹 구현을 위해 필요

### http-equiv
- content-security-policy : 페이지의 콘텐츠 정책
- refresh : 리다이렉트 (최근에는 지양하고 있음)

### example

```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

## Opengraph

웹페이지가 소셜 미디어 또는 오픈그래프를 활용한 사이트로 공유될때 사용되어지는 정보

- og:title
- og:type
- og:image
- og:url

```html
<html prefix="og: https://ogp.me/ns#">
<head>
<title>The Rock (1996)</title>
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
...
</head>
...
</html>
```

# 🧩 `<button>` 태그 분석

클릭할 수 있는 버튼을 만들 때 사용하는 태그

## 속성

attribute | value | submit | description
--- | --- | --- | ---
autofocus | autofocus | X | 페이지가 로드됐을 때 자동으로 포커스되게 할 것인지 정의
disabled | disabled | X | 버튼 비활성화
form | *form_id* | X | 버튼이 속한 form이 있을 경우 form의 아이디를 적음
formaction | *URL* | O | 데이터를 전송할 URL
formenctype | application/x-www-form-urlencoded<br>multipart/form-data<br>text/plain | O | form-data를 서버에 보내기 전에 어떻게 인코딩할 것인지 설정
formmethod | get / post | O | 전송 메소드 정의
formnovalidate | formnovalidate | O | valid해야 전송할 것인지 설정
formtarget | _blank<br>_self<br>_parent<br>_top<br>*framename* | O | submit이후 response를 어디에 display할 것인지
name | name | X | 버튼 태그의 이름
type | button<br>reset<br>submit | X | 버튼의 타입
value | *text* | 버튼의 initial value

접근성을 위해 최소 44*44 크기를 권장한다.

---
### 참고자료
- https://junhobaik.github.io/meta-tag/
- https://webclub.tistory.com/354
- https://ogp.me/