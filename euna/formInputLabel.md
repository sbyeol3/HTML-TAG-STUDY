# week 5
## form, input, label

### 1. form  
form은 입력 양식 전체를 감싸는 태그, text, button, radio등을 컨트롤한다.

form 속성  
|속성|설명||
|---|---|---|
|**name**|form의 이름|서버로 보내질 때 이름의 값으로 데이터 전송|  
|**action**|form이 전송되는 서버 url 또는 html링크||  
|**method**|전송방법 설정|get은 default, post는 데이터를 url에 공개하지 않고 숨겨서 전송|  
|**autocomplete**|자동완성|on으로 하면 form 전체에 자동완성 허용|  

```html
<form name="profile" action="/action_page.php" method="get" 
      autocomplete="on">
  <input type="text" name="id">
  <select>
    <option value="blue">
  </select>
</form>
```
  
 
   
### 2. form 내부 태그
① input  
|속성|설명|예시
|---|---|---|  
|**type**|입력형식|text, password, button, submit, reset, radio, checkbox, file, hidden|  
|**name**|서버로 전송되는 데이터 이름|

- text type
value: 기본값, 값을 입력하기 전 text칸에 쓰여있음.
placeholder: 칸 안에 default로 쓰여있는 값. 
required pattern: 입력 형식을 지정할 수 있다.
autocomplete:자동완성
autofocus: html작동시 초기 커서의 위치로 설정

```html
TEXT: <input type="text" name="id" value="value" placeholder="placeholder"
       required pattern="[a-zA-Z].+[0-9]" autocomplete="off" autofocus>
```
<img src="./imgs/input1.png" width="300"/>
  
- password type
비밀번호 입력 시 사용, 입력 내용이 보이지 않는다.
```html
Password: 
<input type="password" name="pwd" placeholder="password를 입력하세요.">
```
<img src="./imgs/input2.png" width="300"> <img src="./imgs/input3.png" width="300"/>

- button type
```html
Button: 
<input type="button" value="전송" onclick="alert('알림을 띄웁니다')">
```
<img src="./imgs/input4.png" width="300"/> <img src="./imgs/input5.png" width="300"/>
  
- reset type
form에 입력한 모든 데이터를 초기화한다.
```html
Reset:
<input type="reset">
```
<img src="./imgs/input6.png" width="300"> --> reset 후 <img src="./imgs/input7.png" width="300"/>
  
- radio type
여러 항목 중 단일선택
checked로 미리 선택해놓을 수 있다.
같은 name의 radio버튼중에서 선택됨
  
```html
Radio:
<input type="radio" name="time" value="eightToNine"> 8-9시 <br>
<input type="radio" name="time" value="eightToNine" checked> 11-12시
```
<img src="./imgs/input8.png" width="300">

- checkbox type
여러 항목 중 다중선택 가능
마찬가지로 checked로 미리 선택해 놓을 수 있음
같은 name으로 분류
```html
<input type="checkbox" name="game_title" value="zelda" checked> 젤다의전설 야생의숨결<br>
<input type="checkbox" name="game_title" value="ringFit" checked> 링피트 <br>
<input type="checkbox" name="game_title" value="animalCrossing" checked> 모여봐요 동물의숲<br>
```
<img src="./imgs/input9.png" width="300">

* * *
참조
- https://velog.io/@choiiis/HTMLCSS-form-%ED%83%9C%EA%B7%B8-%EC%A0%95%EB%A6%AC
