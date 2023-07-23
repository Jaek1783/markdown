const Experience = ()=>{
    return <div>
    <h2  className="title">개발 학습</h2>
    <div className="main-container">
        <ul className="experience-container">
            <li className="year Y2018">
                <dl className="experience-item-container">
                    <dt>
                        웹퍼블리싱 실무자 양성과정<br/>국비지원 - 그린컴퓨터 아트학원
                    </dt>
                    <dd className="month M0809">
                        <span className="experience-item-item">Balsamiq 프로그램으로 웹 기획, 고객 페르소나 작업</span></dd>
                    <dd className="month M1011">
                        <span className="experience-item-item">웹표준이 무엇인지 알며, 무분별한 div태그를 지양하고, 시맨틱태그 사용</span>
                    </dd>
                    <dd className="month M12">
                        <span className="experience-item-item">HTML, CSS, JQuery를 학습하여 애니메틱한 페이지를 구성</span>
                    </dd>
                </dl>
            </li>
            <li className="year Y2019">
                <span className="experience-item-container"><br/></span>
                <span className="month M0103">
                    <span className="experience-item-item">JQuery 개인 프로젝트 완성</span></span>
            </li>
            <li>
                <dl className="year Y2022">
                    <dt className="experience-item-container">퍼블리싱 복습</dt>
                    <dd className="month M0104">
                        <span className="experience-item-item">퍼블리싱 웹사이트 Copy</span>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>리액트 기초반, 심화반<br/>온라인 강의 - 스파르타 코딩클럽</dt>
                    <dd className="month M0709">
                        <span className="experience-item-item">리액트 - 함수형 컴포넌트 분리, 재사용
                            <br/>리덕스를 사용한 상태관리
                            <br/>Firebase를 이용한 프론트엔드 서버리스
                            <br/>AWS S3 Route53 CloudFront를 사용한 정적사이트 도메인 배포
                        </span>
                    </dd>
                    <dd className="month M1011">
                        <span className="experience-item-item">리액트 풀스택 웹사이트 제작</span>
                    </dd>
                </dl>
            </li>
            <li>
                <dl className="year Y2023">
                    <dt className="experience-item-container">
                        리액트 / 넥스트 JS 기초학습<br/>
                        온라인 강의 - Udemy
                    </dt>
                    <dd className="month M0104">
                        <span className="experience-item-item">리액트 프레임워크 넥스트 JS 기본기능
                        <br/>SSR 을 사용한 SEO최적화 / 빌드 후 이미지 최적화
                        <br/>MongoDB 연결 / 사용 - CRUD
                        <br/>Vercel을 이용한 사이트 배포
                        </span>
                    </dd>
                </dl></li>
            <li>
                <dl>
                    <dt>리액트 / 넥스트 JS / 원티드 - 프리온보딩 7월
                    </dt>
                    <dd className="month M07">
                        <span className="experience-item-item">
                            MPA와 CSR
                            <br/>CSR과 SSR
                            <br/>Node JS 기능 fs, path을 이용한 Markdown 블로그 만들기
                            <br/>Framework Next JS
                        </span>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>리액트 / 리덕스 / 넥스트 JS / 타입스크립트
                        <br/>온라인 강의 - Udemy
                    </dt>
                    <dd className="month M07">
                        <span className="experience-item-item">expense 시각화 사이트 만들기</span>
                        <span className="experience-item-item">피자헛 디자인 카피 사이트 만들기</span>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>  
</div>
};
export default Experience;