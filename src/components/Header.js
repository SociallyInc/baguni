import React from 'react';
import logo from '../assets/baguni_logo.png';

function Header() {
  const handleDownloadClick = () => {
    window.location.href = "https://play.google.com/store/games?hl=ko";
  };

  return (
    <header className="header">
      <img src={logo} alt="baguni logo" className="logo" />
      <button className="download-button" onClick={handleDownloadClick}>앱 다운로드</button>
    </header>
  );
}

export default Header;
