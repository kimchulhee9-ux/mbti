import React from 'react';
import './StartScreen.css';

function StartScreen({ onStart }) {
  return (
    <div className="start-screen fade-in">
      <div className="title-container">
        <h1>나의 진짜 모습은?</h1>
        <p className="subtitle">심플하고 정확한 MBTI 성격 유형 검사</p>
      </div>
      
      <div className="illustration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="info">
        <p>⏱ 소요 시간: 약 3분</p>
        <p>📝 총 40문항</p>
      </div>

      <button className="start-button" onClick={onStart}>
        검사 시작하기
      </button>
    </div>
  );
}

export default StartScreen;
