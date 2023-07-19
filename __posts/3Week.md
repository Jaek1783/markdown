# 원티드 프리온보딩 7월 3일차 
***
강의날짜 : 2023-07-11

## Next.js가 프레임워크인 이유

* Next.js가 급격하게 시장을 집어삼켜왔던 지난 3년이 아니었나 싶습니다. 실제로 2020년 말 대비 다운로드 수가 4배 이상 증가
* 그 배경에는 Next.js가 대단히 활발하게 기능을 업데이트함에 있다

### 라이브러리와 프레임워크의 차이
* 라이브러리 - 완성된 도구를 골라서 가져다 사용하는 것
* 프레임워크 - 내가 만든 구조를 보내서 만들어 주는 것

* 연필은 라이브러리이고, 프린터는 프레임워크입니다. 
* 전자의 경우 ‘필기한다’는 목적 아래 내가 ‘연필’이라는 도구를 ‘선택‘하여 원하는 방식으로 사용할 수 있습니다. 
* 필기하는 행위의 주도권이 사용자인 저에게 있습니다. 연필이 마음에 들지 않으면 언제든 다른 필기구로 갈아탈 수 있습니다.

* 반면 프린터의 경우 필기한다는 목적을 위해 제가 선택할 수 있는 것이 없습니다. 
* 물론 프린터를 선택한건 저이고, 옵션을 설정하여 여러가지 변경을 줄 수는 있습니다. 
* 하지만 프린터 내부 작동 방식에 손을 댈 수는 없고, 옵션으로 주어진 것도 프린터가 허용하는 범위 내에서 선택할 수 있습니다.

``` Typescript
// 폴더 구조로 라우트 구성하기
const pages: Record<string, { default: React.ElementType }> = import.meta.glob(
  "./pages/*.tsx", { eager: true }
);

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx/)?.[1] ?? "";
  return {
    name,
    path: `/${name === "index" ? "" : name}`,
    component: pages[path].default,
  };
});

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <Router>
    {routes.map(({ path, component: Component }) => (
      <Route key={path} path={path} component={<Component />} />
    ))}
  </Router>
);

```


### 넥스트 JS의 기능
- **User Interface** - how users will consume and interact with your application.
- **Routing** - how users navigate between different parts of your application.
- **Data Fetching** - where your data lives and how to get it.
- **Rendering** - when and where you render static or dynamic content.
- **Integrations** - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
- **Infrastructure** - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
- **Performance** - how to optimize your application for end-users.
- **Scalability** - how your application adapts as your team, data, and traffic grow.
- **Developer Experience** - your team’s experience building and maintaining your application.

## next/image 전격 해부!

- **Improved Performance:** Always serve correctly sized image for each device, using modern image formats
- **Visual Stability:** Prevent [Cumulative Layout Shift](https://nextjs.org/learn/seo/web-performance/cls) automatically
- **Faster Page Loads:** Images are only loaded when they enter the viewport, with optional blur-up placeholders
- **Asset Flexibility:** On-demand image resizing, even for images stored on remote servers
- Next.js는 CLS(Cumulative Layout Shift) 해소 겸 이미지 사이즈 최적화