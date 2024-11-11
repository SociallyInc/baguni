import React from 'react';
import logo from '../assets/baguni_logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="baguni logo" className="logo" />
      <button className="download-button">앱 다운로드</button>
    </header>
  );
}

export default Header;
