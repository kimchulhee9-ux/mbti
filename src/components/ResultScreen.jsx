import React, { useState, useEffect, useCallback, useRef } from 'react';
import { results } from '../data/results';
import { groupContent, GROUPS } from '../data/groupContent';
import './ResultScreen.css';

// ==========================================
// 📊 구글 스프레드시트 연동 설정
// ==========================================
// .env 파일의 VITE_GOOGLE_SHEETS_WEB_APP_URL 값을 읽어옵니다.
const GOOGLE_SHEETS_WEB_APP_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL || '';

// 화면에 보이는 성향 축 이름 (내부 코드 → 우리말)
const AXIS_LABELS = {
  E: '어울림', I: '고요함',
  S: '경험', N: '상상',
  T: '이치', F: '마음',
  J: '계획', P: '흐름',
};

// 내부 유형 코드를 화면용 유형 이름으로 바꿔 줍니다.
const typeName = (code) => (results[code] ? results[code].title : code);

function ResultScreen({ resultType, scores, onRestart, userName, group = 'student' }) {
  const resultData = results[resultType];
  const extra = groupContent[resultType] || {};
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
          group: GROUPS[group] ? GROUPS[group].label : group,
          typeName: resultData ? resultData.title : '',
        }),
      });

      // mode: 'no-cors'의 경우 응답 바디를 직접 확인할 수는 없으나,
      // 네트워크 에러가 발생하지 않는 한 데이터는 스프레드시트에 성공적으로 기록됩니다.
      setSubmitStatus('success');
    } catch (error) {
      console.error("구글 스프레드시트 전송 에러:", error);
      setSubmitStatus('error');
    }
  }, [userName, resultType, scores, group, resultData]);

  // 결과는 한 번만 자동 전송합니다. (개발 모드에서 화면이 두 번 그려져도 중복 저장되지 않도록)
  const hasSubmittedRef = useRef(false);
  useEffect(() => {
    if (hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;
    submitResults();
  }, [submitResults]);

  // 결과 유형에 따라 각 축의 승자 점수만 표시
  const scoreItems = resultType ? [
    { key: resultType[0], label: AXIS_LABELS[resultType[0]], value: scores[resultType[0]] ?? 0 },
    { key: resultType[1], label: AXIS_LABELS[resultType[1]], value: scores[resultType[1]] ?? 0 },
    { key: resultType[2], label: AXIS_LABELS[resultType[2]], value: scores[resultType[2]] ?? 0 },
    { key: resultType[3], label: AXIS_LABELS[resultType[3]], value: scores[resultType[3]] ?? 0 },
  ] : [];

  if (!resultData) {
    return <div className="result-screen">결과를 불러오는 데 문제가 발생했습니다.</div>;
  }

  return (
    <div className="result-screen fade-in" style={{ '--theme-color': resultData.color }}>
      {!GOOGLE_SHEETS_WEB_APP_URL ? (
        <div className="submission-status-bar error">
          <div className="status-content">
            <span>⚠️ 구글 스프레드시트 연동 URL이 설정되지 않아 데이터가 저장되지 않습니다. (.env 설정 필요)</span>
          </div>
        </div>
      ) : (
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
              <span>❌ 전송 실패! [ {userName} / {resultData.title} ]</span>
              <button className="retry-button-small" onClick={submitResults}>재시도</button>
            </div>
          )}
        </div>
      )}

      <div className="result-header">
        <p className="result-subtitle">{userName ? `${userName}님의 마음 나침반은` : '당신의 마음 나침반은'}</p>
        <h1 className="result-type result-type-name">{resultData.title}</h1>
        <p className="result-code">{resultType}</p>
        {scoreItems.length > 0 && (
          <div className="score-breakdown">
            {scoreItems.map((item) => (
              <span key={item.key} className="score-badge">
                {item.label}({item.key}) <strong>{item.value}</strong>
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

        {group === 'student' && resultData.jobTraits && (
          <div className="job-traits-section">
            <h3>💼 선호하는 직업특성</h3>
            <ul>
              {resultData.jobTraits.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </div>
        )}

        {group === 'parent' && extra.parentStyle && (
          <div className="job-traits-section">
            <h3>👨‍👩‍👧 나의 양육 스타일</h3>
            <ul>
              {extra.parentStyle.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {group === 'parent' && extra.parentTips && (
          <div className="job-traits-section">
            <h3>💬 자녀와 대화 팁</h3>
            <ul>
              {extra.parentTips.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {group === 'senior' && extra.seniorCare && (
          <div className="job-traits-section">
            <h3>💗 마음 돌봄 한마디</h3>
            <ul>
              {extra.seniorCare.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {group === 'senior' && extra.seniorActivities && (
        <div className="future-careers-section">
          <h3>🌿 인생 2막에 어울리는 활동</h3>
          <div className="careers-grid">
            {extra.seniorActivities.map((act, index) => (
              <div key={index} className="career-card">
                <span className="career-icon">{act.icon}</span>
                <span className="career-name">{act.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {group === 'student' && resultData.futureCareers && (
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
          <p className="match-type">{typeName(resultData.goodMatch)}</p>
          <p className="match-code">{resultData.goodMatch}</p>
        </div>
        <div className="match-box bad-match">
          <p className="match-label">환장의 짝꿍</p>
          <p className="match-type">{typeName(resultData.badMatch)}</p>
          <p className="match-code">{resultData.badMatch}</p>
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
