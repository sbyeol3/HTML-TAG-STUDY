# ```<table>``` 태그
> 2020.09.05

* 문서에서 표를 만드는 태그

## ```<table>``` 태그의 속성

| 이름 | 설명 |
| :--- | :---: |
| border | 테두리 두께 설정 |
| bordercolor | 테두리 색깔 설정 |
| width | 테두리 넓이 설정 |
| height | 테두리 높이 설정 |
| bgcolor | 배경 색깔 설정 |

## ```<tr>, <td>``` 태그

* ```<tr>``` 태그는 표의 행을 나타낸다.
* ```<td>``` 태그는 표의 열을 나타내며, ```<tr>``` 태그 하위에 위치한다.

## ```<thead>,<tbody>,<th>``` 태그

* ```<thead>``` 태그는 표의 제목 영역을 나타낸다. ```<table>``` 하위, ```<tr>``` 상위에 위치한다.
* ```<tbody>``` 태그는 표의 본문 영역을 나타낸다. ```<thead>```와 같은 위치에 존재한다.
* ```<th>``` 태그는 제목 셀을 나타낸다. ```<td>``` 태그 대신 사용된다.

```javascript
<table>
    <thead>
        <tr>
            <th>이름</th>
            <th>나이</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>가나다</td>
            <td>20살</td>
        </tr>
        <tr>
            <td>라마바</td>
            <td>21살</td>
        </tr>
    </tbody>
</table>
```

## 셀 병합 

* colspan은 ```<td>``` 태그에서 사용되며, 열을 확장한다. (좌우)
* rowspan은 ```<td>``` 태그에서 사용되며, 행을 확장한다. (상하)

```javascript
<td colspan="2">열 합치기</td>
```

---

**참고자료**
> https://ofcourse.kr/html-course/table-%ED%83%9C%EA%B7%B8

> https://lktprogrammer.tistory.com/84

> https://2018-start.tistory.com/21