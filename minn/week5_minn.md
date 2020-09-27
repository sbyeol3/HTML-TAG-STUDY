## ```<form>``` 태그  
> 2020.09.19

* 웹 페이지에서의 입력 양식 전체를 감싸는 태그 (ex. 로그인 창, 회원가입 폼)

## ```<form>``` 속성
| type 속성값 | 설명 |
| :--- | :---: |
| name | form의 이름, 서버로 보내질 때 이름의 값으로 데이터 전송 |
| action | form이 전송되는 서버 url, 또는 html 링크 |
| method | 전송 방법 설정. get이 defalut. post는 데이터를 url에 공개하지 않고 숨겨서 전송하는 방법 |
| autocomplete | 자동 완성. on으로 하면 form 전체에 자동 완성 허용 |

```javascript
<form name="profile" action="/action_page.php" method="get" 
      autocomplete="on">
  <input type="text" name="id">
  <select>
    <option value="blue">
  </select>
</form>
```

## ```<input>``` 태그 
* ```<form>``` 내부의 태그  
* 사용자로 부터 정보를 받아들이는 용도
* type 속성을 이용해 입력 양식을 변경  

## type 속성 :

| type 속성값 | 설명 |
| :--- | :---: |
| text | 텍스트를 입력하는 창 생성 |
| textarea | 여러줄의 텍스트를 입력하는 창 생성 |
| password | 비밀번호를 입력하는 창 생성 |
| radio | 라디오 버튼 생성 |
| checkbox | 체크 박스 생성 |
| file | 파일 이름을 입력하는 창 생성 |
| image | 이미지를 전송버튼으로 만듦 |
| hidden | 사용자에게 보이지 않지만 서버로 전송 |
| submit | 서버로 제출하는 버튼 생성 |
| reset | 양식을 초기화하는 버튼 생성 |
| button | 일반 버튼 생성 |
| select | 드롭 다운 형식의 선택. 선택 항목은 option으로 설정 |

## value 속성 :
입력 태그의 초기값. 사용자가 변경 가능

## name 속성 :
서버로 전달되는 데이터의 이름. 사용자가 임의 지정

# ```<label>``` 태그

* 입력 양식에 이름을 붙임.
* ```<input>``` 태그를 제어하여 상태 값을 변경하도록 도움. 
* 주요 속성은 for (label의 for값과 양식의 id값이 같으면 연결)
* ```<label>``` 태그에 적힌 텍스트를 선택하면, ```<label>```과 연결된 입력양식이 선택됨. 
* ```<input>``` 등의 양식을 ```<label>```로 감싸면 id와 for이 없어도 같은 결과를 얻을 수 있음. 

```javascript
<label for="fruitItem">여기를 클릭</label>
<input id="fruitItem" type="checkbox" />
```

**참고자료**
> https://velog.io/@choiiis/HTMLCSS-form-%ED%83%9C%EA%B7%B8-%EC%A0%95%EB%A6%AC

> https://yangbari.tistory.com/28

> https://ofcourse.kr/html-course/form-%ED%83%9C%EA%B7%B8

> https://www.codingfactory.net/11008

> https://webisfree.com/2017-01-10/label-%ED%83%9C%EA%B7%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%8B%A4%EC%96%91%ED%95%9C-%EB%B0%A9%EB%B2%95

