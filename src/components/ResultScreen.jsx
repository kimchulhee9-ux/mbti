import React from 'react';
import { results } from '../data/results';
import './ResultScreen.css';

function ResultScreen({ resultType, onRestart }) {
  const resultData = results[resultType];

  if (!resultData) {
    return <div className="result-screen">결과를 불러오는 데 문제가 발생했습니다.</div>;
  }

  return (
    <div className="result-screen fade-in" style={{ '--theme-color': resultData.color }}>
      <div className="result-header">
        <p className="result-subtitle">당신의 성격 유형은</p>
        <h1 className="result-type">{resultType}</h1>
        <h2 className="result-title">{resultData.title}</h2>
      </div>

      <div className="result-card">
        <p className="result-description">{resultData.description}</p>
        
        <div className="features-list">
          <h3>✨ 특징</h3>
          <ul>
            {resultData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="match-container">
        <div className="match-box good-match">
          <p className="match-label">환상의 짝꿍</p>
          <p className="match-type">{resultData.goodMatch}</p>
        </div>
        <div className="match-box bad-match">
          <p className="match-label">환장의 짝꿍</p>
          <p className="match-type">{resultData.badMatch}</p>
        </div>
      </div>

      <div className="action-buttons">
        <button className="restart-button" onClick={onRestart}>
          테스트 다시하기
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;
