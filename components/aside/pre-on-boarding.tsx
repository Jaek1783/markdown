import Link from "next/link";
const PreOnBoarding = ({list, activeTitle})=>{
    return <>
        <span className="aside-content">원티드</span>
        <span>7월 프리온보딩</span>
        <ol>
            {list.map((l, index) => (
                <li key={index}>
                <Link href={l.title} className={activeTitle === l.title ? "active" : ""}>{l.title}</Link>
                </li>
                ))}
      </ol>
    </>
};
export default PreOnBoarding;