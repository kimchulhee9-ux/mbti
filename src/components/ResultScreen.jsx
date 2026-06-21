import React from 'react';
import { results } from '../data/results';
import './ResultScreen.css';

function ResultScreen({ resultType, scores, onRestart }) {
  const resultData = results[resultType];

  // 결과 유형에 따라 각 축의 승자 점수만 표시
  const scoreItems = resultType ? [
    { label: resultType[0], value: scores[resultType[0]] ?? 0 },
    { label: resultType[1], value: scores[resultType[1]] ?? 0 },
    { label: resultType[2], value: scores[resultType[2]] ?? 0 },
    { label: resultType[3], value: scores[resultType[3]] ?? 0 },
  ] : [];

  if (!resultData) {
    return <div className="result-screen">결과를 불러오는 데 문제가 발생했습니다.</div>;
  }

  return (
    <div className="result-screen fade-in" style={{ '--theme-color': resultData.color }}>
      <div className="result-header">
        <p className="result-subtitle">당신의 성격 유형은</p>
        <h1 className="result-type">{resultType}</h1>
        <h2 className="result-title">{resultData.title}</h2>
        {scoreItems.length > 0 && (
          <div className="score-breakdown">
            {scoreItems.map((item) => (
              <span key={item.label} className="score-badge">
                {item.label} <strong>{item.value}</strong>
              </span>
            ))}
          </div>
        )}
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

        {resultData.jobTraits && (
          <div className="job-traits-section">
            <h3>💼 선호하는 직업특성</h3>
            <ul>
              {resultData.jobTraits.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {resultData.futureCareers && (
        <div className="future-careers-section">
          <h3>🚀 미래 추천 직업</h3>
          <div className="careers-grid">
            {resultData.futureCareers.map((career, index) => (
              <div key={index} className="career-card">
                <span className="career-icon">{career.icon}</span>
                <span className="career-name">{career.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

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
