import React from 'react';
import { FaApple, FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* 좌측 정보 섹션 */}
      <div className="footer-left">
        <p><strong>(주)소셜리</strong></p>
        <br />
        <p className="single-line">
          <strong>대표:</strong> 유재민 | <strong>사업자번호:</strong> 779-81-03228
        </p>
        <br />
        <p>문의: 카카오 비즈니스 채널</p>
        <p>Email: socially@socially.co.kr</p>
      </div>

      {/* 우측 다운로드 섹션 */}
      <div className="footer-right">
        <p>앱 다운로드</p>
        <div className="app-links">
          {/* App Store 버튼 */}
          <a href="https://www.apple.com/app-store/" className="link-button">
            <FaApple style={{ fontSize: "14px", marginRight: "6px" }} />
            App Store
          </a>
          {/* Google Play 버튼 */}
          <a href="https://play.google.com/store" className="link-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
              alt="Google Play Logo"
              style={{ width: "16px", height: "16px", marginRight: "6px" }}
            />
            Google Play
          </a>
        </div>
      </div>

      {/* 소셜 미디어 아이콘 섹션 */}
      <div className="social-links">
        <a href="https://www.youtube.com" className="social-icon">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" className="social-icon">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
