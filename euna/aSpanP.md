# week2
## a, span, p

### 1. a

a 속성은 세가지가 있다.
- href: 연결할 주소 지정
- target: 링크를 클릭할 때 창을 어떻게 열지 설정
  1) \_self : 해당 창에서 연다
  2) \_blank: 새창으로 연다
  3) \_parent: 부모창에서 연다 (없으면 \_self)
  4) \_top: 가장 상위 창에서 연다 (없으면 \_self)
- title: 링크에 커서를 올릴때 뜨는 문구

```html
<a href="https://github.com/Euna789/HTML-TAG-STUDY/tree/master/euna">html 태그 스터디 github</a>

<a href="www.naver.com" target="_blank">네이버</a> //새창에서 열기
<a href="www.google.com" target="_self">구글</a> //현재창에서 열기

<a href="www.youtube.com" title="유튜브로 이동">유튜브</a>
```
<img src="./imgs/a.png" width="400"/>

```html
<a href="javascript:alert('자바스크립트 alert호출')">alert</a>
```
<img src=".imgs/a2.png" width="400"/>

