# 🧩 `<p>` 태그 분석

> 2020.08.26

## 정의 및 사용

> `paragraph` 

하나의 문단을 만들 때 쓰이는 태그이다. 
브라우저는 자동으로 `<p>` 태그의 위쪽과 아래쪽에 약간의 margin을 추가한다.
이러한 여백은 CSS의 margin 속성을 사용하여 조정할 수 있다.
태그를 기준으로 각 줄은 독립적인 내용으로 `Block-level Element`이다.

```css
/* Chrome 기준! Firefox도 동일함*/

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
```



---
### 참고자료
- http://www.tcpschool.com/html-tags/p