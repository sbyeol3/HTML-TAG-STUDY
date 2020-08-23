# 🧩 `<div>` 태그 분석

> 2020.08.17 샛별 작성

## 정의 및 사용

> **division의 약자**

레이아웃을 나누는 데 주로 쓰이는 태그이다. 특별한 기능은 없고 가상의 레이아웃을 설계한다. <br>
보통은 HTML element를 JavaScript로 조작하거나 CSS로 스타일링을 하기 위해 해당 element를 담는 태그로 사용된다. <br>
또한 `<div>`는 class나 id로 쉽게 스타일링 할 수 있다. 브라우저는 기본 값으로 `<div>` 태그 이후에 줄을 띄운다.

```css
div {
  display: block;
}
```

# 🧩 `<section>` 태그 분석
> 2020.08.22 샛별 작성

## 정의 및 사용

HTML5에서 새로 추가된 태그로, 문서에서 하나의 section을 구분하기 위해 사용하는 태그 <br>
관련 있는 내용을 하나의 section 태그로 묶어서 표시한다. <br>
제목과 관련된 태그(h1~h6)를 자식 요소로 가지기도 한다.
독립적인 영역이어도 하나의 section 내에도 헤더(header)와 푸터(footer)를 둘 수 있다. 나름의 제목 체계를 가질 수 있다는 것을 의미하며, 섹션마다 H1 요소를 가질 수 있다.



```css
section {
  display: block;
}
```

## 브라우저

chrome | IE | firefox | safari | opera
--- | --- | --- | --- | ---
5.0 | 9.0 | 4.0 | 5.0 | 11.5

## section vs. div

1. 내용이 독립적이고 스스로 설 수 있는 내용이라면 article을 사용
2. 내용이 서로 관계가 있다면 section -> `하위 element!`
3. 의미적으로 관계가 없다면 div를 사용(div는 오직 내용을 묶는 역할)

---

### 참고자료

> https://www.w3schools.com/tags/tag_div.ASP <br>
> https://ofcourse.kr/html-course/div-%ED%83%9C%EA%B7%B8 <br>
> https://www.w3schools.com/tags/tag_section.asp <br>
> https://webdir.tistory.com/310 <br>
> https://honinbo-world.tistory.com/2