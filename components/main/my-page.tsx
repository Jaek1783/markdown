import Link from "next/link";

const MyPage = ()=>{
    return <div className="main-item">
        <h2 className="title">My Page</h2>
        <div className="main-container">
            <ul>
                <li><Link href={'https://github.com/jaek1783'} target='_blank'>github.com/jaek1783</Link></li>
                <li>blog.naver.com/wormsbrother</li>
            </ul>
        </div>
    </div>
};
export default MyPage;