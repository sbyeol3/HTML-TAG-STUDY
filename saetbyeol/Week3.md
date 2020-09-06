# 🧩 `<table>` 태그 분석

### 정의 및 사용

행과 열로 이루어진 **HTML 테이블**을 정의하는 태그이다.

HTML 테이블은 하나의 `<table>` 태그와 하나 이상의 `<tr>` `<th>` `<td>`로 이루어져 있다.
추가적으로 `<caption>` `<colgroup>` `<thead>` `<tfoot>` `<tbody>` 태그들도 가질 수 있다.

### CSS

```css
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
}
```

## 필수 태그

> HTML5 이후 사라진 속성들이 여러 개 있음!

### `<tr>` 태그

하나의 행을 나타내는 태그

```css
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
```

### `<th>` 태그

- 테이블의 attribute 이름을 나타낼 때 사용하는 태그
- 기본적으로 bold, 가운데 정렬이 적용된다.

```css
th {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: center;
}
```

속성 | 값 | 설명
--- | --- | ---
abbr | *text* | 셀 내부에 대한 간단한 설명
colspan | *number* | 병합할 행의 개수
headers | *header_id* | 하나 이상의 관련된 헤더
rowspan | *number* | 병합할 열의 개수
scope | `col` `colgroup` `row` `rowgroup` | 헤더 셀과 데이터 셀을 연결하는 방법, 복잡한 표일 때 사용하는 것이 좋다.

### `<td>` 태그

- 테이블의 데이터를 나태낼 때 사용하는 태그
- `th`와 다르게 왼쪽 정렬이 기본 값이다.

```css
td {
  display: table-cell;
  vertical-align: inherit;
}
```

속성 | 값 | 설명
--- | --- | ---
colspan | *number* | 병합할 행의 개수
headers | *header_id* | 하나 이상의 관련된 헤더
rowspan | *number* | 병합할 열의 개수

## optional 태그 (semantic)

### `<caption>`

테이블의 목적에 대한 명확하고 상세한 설명 작성하는 태그로, `<table>` 태그 이후 바로 나오는 것이 좋다.
특히 스크린 리더 등 보조 기술 사용자와 낮은 시력의 사용자, 인지능력의 저하를 겪고 있는 사용자에게 필요하다.

```css
caption {
  display: table-caption;
  text-align: center;
}
```

### `<colgroup>`

테이블의 열을 묶는 그룹을 정의하는 태그, 각 그룹별로 공통적인 스타일을 적용할 때 유용하다.
`<thead>`보다 먼저 나오고 `<caption>`보다 나중에 나와야 한다.

속성 | 값 | 설명
--- | --- | ---
span | number | colgroup이 차지할 열의 수를 나타내는 양의 정수

### `<thead>`

헤더 콘텐츠를 하나의 그룹으로 묶을 때 사용하는 태그로, 테이블의 각 영역(header, body, footer)을 명시하기 위해 `<tbody>, <tfoot>` 요소와 함께 사용된다.

반드시 모든 `<caption>, <colgroup>` 요소 다음에 위치해야 하고 반드시 하나 이상의 `<tr>` 요소를 포함하고 있어야 한다.

### `<tbody>`

하나 이상의 `<tr>` 요소를 포함하고 있어야 하고, 여러 번 선언되어 행을 그룹화할 수 있다.

### `<tfoot>`

열의 요약으로 구성된 집합, `<table>` 내에 한번만 사용할 수 있다.

### 브라우저 지원

모든 브라우저에서 지원한다.

---

### 참고자료

- https://www.w3schools.com/tags/tag_table.asp
- https://developer.mozilla.org/ko/docs/Web/HTML/Element/table
- http://webberstudy.com/html-css/html-2/table-symactic/