import AboutMe from '../components/main/about';
import MyPage from '../components/main/my-page';
import Career from '../components/main/career';
import Experience from '../components/main/experience';
import Intro from '../components/main/introduce';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='page'>
      <dl className='main-title-container'>
        <dt><Image src={'/images/index/me.jpg'} alt={'나'} width={100} height={100}/></dt>
        <dd className="main-title">
          <span className='ko-name'>최재근</span>
          <span className='en-name'>CHOI JAEKEUN</span>
          <span className='sub-title'>Frontend Developer</span>
        </dd>
      </dl>
      <div>
      
      </div>
      <div className='container'>
        <div>
          <AboutMe/>
          <MyPage/>
          <Career/>
        </div>
        <Experience/>
      </div>
      <Intro/>
    </main>
  )
}