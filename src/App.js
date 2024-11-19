import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import img1 from './assets/봉사 모집.png';
import img2 from './assets/봉사동아리소개.png';
import img3 from './assets/봉사자 정보.png';
import img4 from './assets/지도_아동센터.png';
import img5 from './assets/지도_유기견산책.png';
import img6 from './assets/커뮤니티_후기.png';

function App() {
  const handleDownloadClick = () => {
    window.location.href = "https://play.google.com/store/games?hl=ko";
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
    <div className="App">
      <Header />
      <div className="uphighlight-section">
        <div>
          <p>복지시설과 근처 사람들과의 따뜻한 연결</p>
          <h2><strong>우리 동네 봉사,</strong></h2>
          <h2><strong>소통을 손쉽게</strong></h2>
          <br />
          <button onClick={handleDownloadClick}><strong>앱 다운로드</strong></button>
        </div>
        <div className="image-container">
          <img src={img1} alt="img 1" className="phone-image phone-image-1" />
          <img src={img2} alt="img 2" className="phone-image phone-image-2" />
          <img src={img6} alt="img 6" className="phone-image phone-image-6" />
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
            내 일상 속 지역 위주로
            <br />
            봉사 가능한 복지시설을 확인해보세요.
          </>
        }
        imgSrc1={img4}
        imgSrc2={img5}
      />

      <Section
        title={
          <>
            나의 조건 및 관심사에 맞는
            <br />
            봉사를 찾는게 어려워요.
          </>
        }
        description={
          <>
            교육, 체육, 유기견, 생활보조 봉사 등을
            <br />
            선호 일정에 맞춰 근처에서 쉽게 찾아드릴께요.
          </>
        }
        imgSrc3={img3}
      />

      <Section
        title="혼자 봉사하시는 거 지겨우시죠?"
        description={
          <>
            주변 친구들과 그룹을 만들어
            봉사 활동을 진행하고
            <br />
            나의 사회적 활동을 바구니
            커뮤니티에 공유해보세요!
          </>
        }
        imgSrc1={img2}
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
  );
}

export default App;
