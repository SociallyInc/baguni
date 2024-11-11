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
      <div className="uphighlight-section">
        <p>복지시설과 근처 사람들과의 따뜻한 연결</p>
        <h2><strong>우리 동네 봉사, <br/> 소통을 손쉽게</strong></h2>
        <br/>
        <button><strong>앱 다운로드</strong></button>
      </div>
      <Section
        title={
        <>
          우리 동네는 도움이 필요한
          <br/>
          복지시설이 없을까?
        </>
      }
      description={
        <>
          내 일상 속 지역 위주로 
          <br/>
          봉사 가능한 복지시설을 확인해보세요.
        </>
      }
      imgSrc=""
    />

      <Section
        title={
          <>
            나의 조건 및 관심사에 맞는 
            <br/>
            봉사를 찾는게 어려워요.
          </>
        }
        description={
          <>
            교육, 체육, 유기견, 생활보조 봉사 등을 
            <br/>
            선호 시간에 맞춰 근처에서 쉽게 찾아드릴께요.
          </>
        }
        imgSrc=""
      />
      <Section
        title="혼자 봉사하시는 거 지겨우시죠?"
        description={
          <>
            주변 친구들과 그룹을 만들어 봉사 활동을 진행하고 
            <br/>
            나의 사회적 활동을 바구니 커뮤니티에 공유해보세요!
          </>
        }
        imgSrc=""
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
