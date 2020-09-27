# 🧩 `<form>` 태그 분석

## 사용

input 태그들이 담겨 있는 하나의 form을 구성하기 위한 태그

### form 내부에서 사용하는 태그
- input
- textarea
- button
- select, option, optgroup
- fiedlset
- label
- output

### CSS

```css
form {
  display: block;
  margin-top: 0em;
}
```

## 속성

attribute | value | description
--- | --- | ---
accep-charset | *character_set* | form을 submit할 때 사용되는 인코딩 방법 정의
action | *url* | submit할 주소를 정의
autocomplete | on / off | form을 auto complete할지 정의
enctype | application/x-www-form-urlencoded <br> multipart/form-data <br> text/plain | method가 POST일 때 form-data를 어떻게 인코딩할지 정의
method | get / post | form-data를 전송할 때 어떤 메소드로 보낼 것인지 정의
name | text | form의 이름
novalidate | novalidate | 폼을 제출할 때 유효성 체크를 할지 말지 정의
rel | 	external, help, license, next, nofollow, <br> noopener, noreferrer, opener, prev, search | 현재 문서와 연결된 리소스와의 관계를 정의함
target | _blank _self _parent _top | 제출하고 받는 response를 어디에 display할 것인지

### 브라우저

모든 브라우저에서 지원한다.

# 🧩 `<input>` 태그 분석

## 사용

- 사용자가 데이터를 입력할 수 있는 input 필드를 정의하는 태그로 빈번하게 사용된다.
- type 속성에 따라 display 되는 방법이 달라진다.
- default type은 text

## 속성 (일부 제외)

attribute | value | description
--- | --- | ---
accept | *file_extension*, audio/*, video/*, image/*, *media_type* | type이 file일 때 사용자가 선택할 수 있는 파일 파일을 필터링 할 수 있다.
alt | text | type이 image일 때 alternate 텍스트를 작성
autocomplete | on / off | input 태그의 자동완성 기능을 설정할지 말지 정의
autofocus | autofocus | page가 로그되었을 때 자동으로 focus를 얻게 할 것인지 정의
checked | checked | type이 checkbox이거나 radio인 경우 page가 로그되었을 때 input 태그가 선택되어 있게 할 것인지
dirname | *inputname.dir* | 
disabled | disabled | 비활성화
form | form_id | input element가 속한 form의 id
formaction | URL | 폼이 제출될 때 input 컨트롤을 처리하는 파일의 URL
max | *number date* | maximum value
maxLength | *number* | input element의 최대 길이
min | *number date* | minimum value
minLength | *number* | input element의 최소 길이
name | text | input element의 이름
placeholder | text | input element에 기대하는 값을 설명하는 짧은 힌트
readonly | readonly | read-only
required | required | 필수 값
src | *URL* | type이 image일 때 image url
step | *number any* | input 필드의 간격
type | button checkbox color date datetime-local <br> email file hidden image month <br> number password radio range reset <br> search submit tel text time url week | input type
value | *text* | input 값

### 브라우저

모든 브라우저에서 지원한다.

# 🧩 `<label>` 태그 분석

## 사용
- 화면리더기는 label 태그를 읽어 사용자가 입력해야 하는 텍스트가 무엇인지 쉽게 이해하도록 도와준다.
- label을 클릭하면 관련된 input에 초점을 맞추거나 활성화 할 수 있다.
- label을 input 태그와 연관시키기 위해 input의 id 값을 label의 for에 넣어야 한다.
- 단 label의 자식 태그로 input을 넣으면 for, id를 설정할 필요가 없다.

---

### 참고자료
- https://www.w3schools.com/tags/tag_form.asp
- https://www.w3schools.com/tags/tag_input.asp