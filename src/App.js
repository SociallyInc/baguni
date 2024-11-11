// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        title="우리 동네 봉사, 소통을 손쉽게"
        description="복지시설과 지역 사람들을 연결하는 플랫폼"
        buttonText="바로 시작하기"
        imgSrc="path/to/your/image1.png" // 실제 이미지 경로로 변경
      />
      <Section
        title="우리 동네는 도움이 필요한 복지시설이 없을까요?"
        description="다양한 복지 시설을 한눈에 확인하고 요청할 수 있어요."
        imgSrc="path/to/your/image2.png"
      />
      <Section
        title="나의 조건 및 관심사에 맞는 봉사를 찾는데 어려워요."
        description="관심, 위치, 활동 시간을 고려한 봉사 활동을 추천받을 수 있어요."
        imgSrc="path/to/your/image3.png"
      />
      <Section
        title="혼자 봉사하시는 거 지겨우시죠?"
        description="다른 봉사자와 소통하고 함께 봉사할 수 있는 기능을 제공해요."
        imgSrc="path/to/your/image4.png"
      />
      <div className="highlight-section">
        <h2>다양한 봉사 혜택을 누려보세요! <br></br> 봉사 시간 채우고 무료 쿠폰 증정!(12월까지 진행)</h2>
        <p><strong>지금 바로 시작하세요</strong></p>
        <button><strong>앱 다운로드</strong></button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
