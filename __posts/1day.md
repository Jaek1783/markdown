
# 원티드 프리온보딩 7월 1일차 
***
강의날짜 : 2023-07-04
## 1. MPA통신구조

### MPA의 통신 구조를 염두에 두고 통신 상황에서 실제 어떤 일
![MPA의 통신구조 이미지](/images/1day/image01.png)
  - 유저가 서버에 GET 요청을 보내 `index.html`을 받았습니다.
  - 유저는 브라우저에서 `index.html` 을 열어 웹 사이트를 이용합니다.
  - `index.html` 페이지 내에 form 태그가 있습니다. 해당 form 태그는 input에 유저의 정보를 담아 서버로 POST 요청을 보냅니다. 
  - 유저는 해당 정보가 업데이트 된 이후의 화면을 봐야 합니다.
  - 서버는 새로운 `index.html` 을 만듭니다. 유저가 가지고 있는 `index.html` 에서는 이 사실을 알지 못합니다.
  - 유저는 화면을 새로고침 하여 서버에 새로운 `index.html` 을 받아와 이용합니다.

### 경로를 변경하는 라우팅
``` html
<!DOCTYPE html>
  <html lang="ko">
  <head></head>
  <body>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="blog.html">Blog</a>
    </nav>
    <main>
      <!-- contents... -->
    </main>
  </body>
```
- a 태그를 사용하여 새로운 html 경로로 이동하여 변경한다

## 2. SPA with CSR

### 자바스크립트의 발전
  - JQuery 등장, 브라우저간 표준이 정해짐
  - `ES6`로 넘어오면서 `let, const`로 블록 스코프 지원
  - 콜백함수만으로 비동기 통신 가능

### Single Page Application & Client Side Rendering
  - 최소한의 HTML을 한 번만 받음
  - 나머지를 모두 자바스크립트로 그림
  - 서버와 완벽 분리

### CSR에서의 브라우저 렌더링 시나리오
![CSR에서의 브라우저 렌더링 시나리오 이미지](/images/1day/image02.png)
  - 브라우저에서 서버로 **웹 페이지를 조회하고 싶다는 요청**
  -  서버는 브라우저로부터 날아온 요청 경로를 확인(`/`)하고 `index.html` 을 서버 내 자원으로부터 찾아 응답으로 돌려준다. 이 때 **index.html의 body 태그 내부는 비어있는 상태**
  - 브라우저는 HTML 파일에서 **head 태그를 읽으며 추가로 필요한 자원(`index.js`, `index.css` 등)을 서버로 다시 요청**
  - 엔트리 역할을 하는 자바스크립트 파일이 다운로드 → 로딩 → 실행되고, 자바스크립트 앱은 미리 프로그래밍 된 로직에 따라 DOM API를 활용해 화면에 태그들을 그림
  - 초기 로딩 이외의 변경이 필요할 때는 서버 API에 요청하여 받아온 데이터로 새롭게 갈아 끼운다.
  - **SPA / CSR 상황에서 페이지 이동(라우팅)**이 필요할 때는 아래와 같은 절차를 거친다.
     - 브라우저 경로를 변경하면 트리거 되는 **기본 HTTP GET 요청은 막되**
     - 브라우저 **주소는 변경된 상태를 유지**하도록 한 다음
     - 변경을 감지하여 **DOM API가 다른 페이지에 알맞은 화면을 그리도록** 한다

### Critical Rendering Path! (중요 렌더링 경로)
![CSR에서의 브라우저 렌더링 시나리오 이미지](/images/1day/image03.png)