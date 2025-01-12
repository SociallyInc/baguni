import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import img1 from './assets/마이페이지none.png';
import img2 from './assets/빵none.png';
import img3 from './assets/봉사자 정보.png';
import img4 from './assets/지도.png';
//import img5 from './assets/지도_유기견산책.png';
import img6 from './assets/커뮤니티.png';
import img7 from './assets/종류.png';
import img8 from './assets/봉사활동검색.png';
import img9 from './assets/봉사활동 후기.png';
import img10 from './assets/highlight_section_img.png';
import { HashRouter } from "react-router-dom";

function App() {
  const handleDownloadClick = () => {
    window.location.href = "https://play.google.com/store/search?q=%EB%B0%94%EA%B5%AC%EB%8B%88&c=apps";
  };

  const highlightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // 뷰포트에 들어오면 상태 변경
          }
        });
      },
      { threshold: 0.2 } // 요소의 20%가 보이면 트리거
    );

    if (highlightRef.current) {
      observer.observe(highlightRef.current); // 관찰 시작
    }

    return () => {
      if (highlightRef.current) {
        observer.unobserve(highlightRef.current); // 관찰 해제
      }
    };
  }, []);

  return (
    <HashRouter>
    <div className="App">
      <Header />
      <div className="uphighlight-section">
        <div>
          <p>복지시설과 근처 사람들과의 따뜻한 연결</p>
          <h2><strong>우리 동네에서</strong></h2>
          <h2><strong>봉사, 후원, 소통을 더 쉽게!</strong></h2>
          <br />
          <button onClick={handleDownloadClick}><strong>앱 다운로드</strong></button>
        </div>
        <div className="image-container">
          <img src={img10} alt="img 1" className="phone-image phone-image-1" />
        </div>
      </div>

      <Section
        title={
          <>
            우리 동네는 도움이 필요한
            <br />
            복지시설이 없을까?
          </>
        }
        description={
          <>
            내 주변에서 봉사하고 후원할 수 있는
            <br />
            복지시설을 한눈에 확인해보세요.
          </>
        }
        imgSrc4={img4}
      />

      <Section
        title={
          <>
            나의 조건과 관심사에 맞는
            <br />
            봉사나 기부처를 찾는게 어렵지 않으신가요?
          </>
        }
        description={
          <>
            내 마음에 드는 기부처와 봉사 유형, 그리고
            <br />
            선호 일정에 딱 맞는 기회를 근처에서 손쉽게 찾아드려요.
          </>
        }
        imgSrc3={img8}
      />

      <Section
        title="혼자 봉사하는 거 지겨우시죠?"
        description={
          <>
            주변 친구들과 그룹을 만들어
            봉사활동을 진행하고
            <br />
            나의 활동을 바구니
            커뮤니티에 공유해보세요!
          </>
        }
        imgSrc1={img9}
        imgSrc2={img6}
      />

      <div
        ref={highlightRef}
        className={`highlight-section ${isVisible ? 'visible' : ''}`} // visible 클래스 추가
      >
        <h2 className="highlight-title">
          다양한 봉사 혜택을 누려보세요! <br /> 봉사 시간 채우고 무료 쿠폰 증정!
        </h2>
        <p className="highlight-description">
          <strong>지금 바로 시작하세요</strong>
        </p>
        <button className="highlight-button" onClick={handleDownloadClick}>
          <strong>앱 다운로드</strong>
        </button>
      </div>

      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
