import React, { useState, useEffect, useCallback } from 'react';
import { results } from '../data/results';
import './ResultScreen.css';

// ==========================================
// 📊 구글 스프레드시트 연동 설정
// ==========================================
// 구글 스프레드시트 배포 후 발급받은 웹 앱 URL을 아래 작은따옴표 사이에 넣어주세요.
// 예: const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxxxx.../exec';
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycb4po_P3u2BZ9Q_rKqkhv51KjE9bcY9GW5BaRXV1le0mNxBYQiQhBDUDGxXxL7pwqgzjQ/exec';

function ResultScreen({ resultType, scores, onRestart, userName }) {
  const resultData = results[resultType];
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const submitResults = useCallback(async () => {
    if (!GOOGLE_SHEETS_WEB_APP_URL || GOOGLE_SHEETS_WEB_APP_URL.includes('YOUR_GOOGLE_SHEETS_WEB_APP_URL_HERE')) {
      console.warn("구글 스프레드시트 배포 URL이 설정되지 않아 데이터가 저장되지 않습니다.");
      setSubmitStatus('idle');
      return;
    }

    setSubmitStatus('submitting');

    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors', // CORS 제한 문제를 우회하여 안전하게 데이터를 전송합니다.
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          name: userName || '익명',
          result: resultType,
          scores: scores,
        }),
      });

      // mode: 'no-cors'의 경우 응답 바디를 직접 확인할 수는 없으나,
      // 네트워크 에러가 발생하지 않는 한 데이터는 스프레드시트에 성공적으로 기록됩니다.
      setSubmitStatus('success');
    } catch (error) {
      console.error("구글 스프레드시트 전송 에러:", error);
      setSubmitStatus('error');
    }
  }, [userName, resultType, scores]);

  useEffect(() => {
    submitResults();
  }, [submitResults]);

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
      {GOOGLE_SHEETS_WEB_APP_URL && !GOOGLE_SHEETS_WEB_APP_URL.includes('YOUR_GOOGLE_SHEETS_WEB_APP_URL_HERE') && (
        <div className={`submission-status-bar ${submitStatus}`}>
          {submitStatus === 'submitting' && (
            <div className="status-content">
              <span className="status-spinner"></span>
              <span>📊 결과를 스프레드시트에 임시 저장 중...</span>
            </div>
          )}
          {submitStatus === 'success' && (
            <div className="status-content">
              <span>✅ 결과가 스프레드시트에 안전하게 기록되었습니다.</span>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="status-content error">
              <span>❌ 전송 실패! [ {userName} / {resultType} ]</span>
              <button className="retry-button-small" onClick={submitResults}>재시도</button>
            </div>
          )}
        </div>
      )}

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
