# 🧩 `<p>` 태그 분석

> 2020.08.26

## 정의 및 사용

> `paragraph` 

하나의 문단을 만들 때 쓰이는 태그이다. 
브라우저는 자동으로 `<p>` 태그의 위쪽과 아래쪽에 약간의 margin을 추가한다.
이러한 여백은 CSS의 margin 속성을 사용하여 조정할 수 있다.
태그를 기준으로 각 줄은 독립적인 내용으로 `Block-level Element`이다.

### CSS
```css
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
```

### Browser

모든 브라우저에서 지원하는 태그!

---

# 🧩 `<span>` 태그 분석

> 2020.08.29

## 정의 및 사용

텍스트나 문서의 한 부분을 나타내기 위한 `inline container`로 사용되는 태그이다.
보통 `class`나 `id` 어트리뷰트를 이용하여 Javascript로 특정 효과를 조작한다.
`<div>`와 비슷하지만 `Inline-level`이라는 차이점이 있다.

### CSS

기본 CSS 값이 존재하지 않는다.

```css
span {
    /* none */
}
```

### Browser

모든 브라우저에서 지원한다.

---

# 🧩 `<a>` 태그 분석

> 2020.08.30

## 정의 및 사용

`<a>`태그는 다른 페이지로 연결할 때 사용하는 하이퍼링크를 정의할 때 사용한다.


### CSS

- **unvisited** : underlined and blue
- **visited** : underlined and purple
- **active** : underlined and red

```css
a:link, a:visited {
  color: (internal value);
  text-decoration: underline;
  cursor: auto;
}

a:link:active, a:visited:active {
  color: (internal value);
}
```

### Browser

모든 브라우저에서 지원한다.

## `<a>` 태그 속성 🔍

속성 | value | 설명
--- | --- | ---
download | *filenmae* | 사용자가 해당 링크를 클릭했을 때 다운로드될 타겟을 정의한다.
href | *URL* | 연결할 페이지의 URL을 정의한다. HTTP 기반일 필요는 없다.
hreflang | *language_code* | 연결되는 문서의 언어를 정의한다.
media | *media_query* | 연결된 페이지가 최적화되는 미디어나 디바이스가 무엇인지 정의한다. 여러 개의 속성 값을 가질 수 있다. 장치는 [all, print, screen, speech]가 있다.
ping | *list of URLS* | 하나의 스페이스로 구분하는 URL 목록, 클릭하는 경우 브라우저가 각 URL에 POST 요청을 전송한다. 보통 추적의 용도로 사용된다.
referrerpolicy | `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `unsafe-url` | URL을 가져올 때 `referrer`를 명시한다.
rel | `alternate`, `author`, `bookmark`, `external`, `help`, `license`, `next`, `nofollow`, `noreferrer`, `noopener`, `prev`, `search`, `tag` | 현재 페이지와 연결된 문서와의 관계를 정의한다.
target | `_blank`, `_parent`, `_self`, `_top` | 연결된 페이지를 표시할 위치를 지정한다. 기본값은 `_self`로 되어 있다.
type | *media_type* | 연결된 URL의 MIME type을 명시한다.

### link types
> HTML에서 두 문서 간의 관계를 명시할 때 사용하는 값

타입 | 설명 | 요소
--- | --- | ---
alternate | 
archives | 아카이브 링크를 포함하고 있는 문서로 연결해주는 하이퍼링크임 | `<a> <area> <link>`
author | 저자에 대한 정보 및 저자와 연락 가능한 연락처 정보가 담긴 페이지 | `<a> <area> <link>`
bookmark | `<article>` 태그에 대해 permalink를 제공하는 하이퍼링크임을 정의하는 값 | `<a> <area>`
canonical | SEO 작업 중 중복 콘텐츠 이슈를 해결하기 위해 공식 URL을 지정 | `<link>`
dns-prefetch | 브라우저에게 해당 리소스가 필요하다고 알려줌으로써 클릭 전에 미리 DNS 조회와 handshake를 수행하도록 함 | `<link>`
external | 현재 사이트 밖의 리소스를 가리키므로 이 링크를 클릭하면 사이트를 떠나게 됨 | `<a> <area>`
first | 하이퍼링크가 현재 페이지에 속한 시퀀스 중 첫 번째 리소스로 이동하는 링크 | `<a> <area> <link>`
help | 하이퍼링크가 부모와 자손 요소에 대한 추가 도움말을 제공함 OR 페이지 전체에 대한 도움말 | `<a> <area> <link>`
icon | UI에서 페이지를 나타낼 때 사용하는 리소스, 보통 아이콘을 의미한다. | `<link>`

...
> 너무 많아서 차근차근 추가하기로..^^

### target
> 👀 `target`을 사용할 때, `rel="noreferrer"`를 추가해 `window.opener` API의 악의적인 사용을 방지하자.

- `_blank` : URL을 새로운 브라우징 맥락에 표시, 보통 새 탭으로 표시되지만 사용자가 브라우저 설정을 통해 변경 가능
- `_parent` : 현재 브라우징 맥락의 부모에 표시, *부모가 존재하지 않는 경우에는 == `_self`*
- `_self` : URL을 현재 브라우징 맥락에 표시
- `_top` : URL을 최상단 브라우징 맥락에 표시, *부모가 존재하지 않는 경우에는 == `_self`*

---
### 참고자료
- http://www.tcpschool.com/html-tags/p
- https://www.w3schools.com/tags/tag_p.asp
- https://www.w3schools.com/tags/tag_span.asp
- http://tcpschool.com/html-tag-attrs/link-media
- https://developer.mozilla.org/ko/docs/Web/HTML/Link_types