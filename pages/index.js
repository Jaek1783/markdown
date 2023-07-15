import AboutMe from '../components/main/about';
import MyPage from '../components/main/my-page';
import Career from '../components/main/career';
import Experience from '../components/main/experience';
export default function Home() {
  return (
    <main className='page'>
      <h2>Image</h2>
      <div className="main-title">
        <span>최재근</span>
        <span>CHOI JAEKEUN</span>
      </div>
      <div className='container'>
        <div>
          <AboutMe/>
          <MyPage/>
          <Career/>
        </div>
        <Experience/>
      </div>
    </main>
  )
}