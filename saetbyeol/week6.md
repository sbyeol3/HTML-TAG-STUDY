# 🧩 `<li>` 태그 분석

## 사용 및 정의

- list의 약자인 `li`로, 목록을 만들 때 사용하는 태그
- 단독으로 사용하지 않고 `<ul></ul>` `<ol></ol>` 내부에서 사용한다.
- 순서가 있을 때는 `ol`, 순서가 없을 때는 `ul`을 사용한다.

## 속성

attribute | value | description
--- | --- | ---
value | *number* | ol 리스트에서 각 아이템의 시작값을 정의할 수 있다. value에서 1씩 증가한다.

### 브라우저

모든 브라우저에서 지원한다.

### CSS

```CSS
li {
  display: list-item;
}
```

# 🧩 `<h1> ~ <h6>` 태그 분석

## 사용 및 정의

- `heading`을 정의할 때 사용하는 태그이다.
- `h1`은 페이지 당 한개를 사용한다.
- 각 숫자는 순서대로 사용하는 것이 좋다.
- 검색엔진이 잘 파악하도록 상황에 맞게 잘 작성하는 것이 중요하다.

### CSS

```CSS
h1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
```

# HTML Layout

- header : 문서나 section의 헤더
- nav : 네비게이션 링크들을 모아놓은 것
- section : 문서의 한 특정한 부분
- article : 독립적인 콘텐츠
- aside : 사이드바와 같은 부분, 특정한 위치에 있는 것
- details : 필요에 따라 열고 닫을 수 있는 추가적인 정보
- footer : 문서나 섹션의 푸터
- summary : details 엘리먼트의 헤딩

![sample](./sample-website.png)