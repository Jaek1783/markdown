import Link from "next/link";
const PreOnBoarding = ({list, activeTitle})=>{
    return <>
        <span>원티드</span><br/>
        <span>7월 프리온보딩</span>
        <ol>
            {list.map((l, index) => (
                <li key={index} className={activeTitle === l.title ? "active" : ""}>
                <Link href={l.title}>{l.title}</Link>
                </li>
                ))}
      </ol>
    </>
};
export default PreOnBoarding;