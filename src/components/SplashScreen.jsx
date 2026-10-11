import React, { useState, useEffect } from 'react';
import './SplashScreen.css';
import splashHero from '../assets/compass_hero.svg';

// 수동으로 참여코드를 변경하려면 아래 4자리 숫자를 수정하세요.
// (교육이 끝나면 숫자를 바꿔서 더 이상 접속할 수 없게 할 수 있습니다)
const PARTICIPATION_CODE = '5555';

function SplashScreen({ onUnlock }) {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'success', 'error'

  const handleKeyPress = (num) => {
    if (status !== 'idle' || code.length >= 4) return;

    const newCode = code + num;
    setCode(newCode);

    if (newCode.length === 4) {
      if (newCode === PARTICIPATION_CODE) {
        setStatus('success');
        setTimeout(() => {
          onUnlock();
        }, 1000);
      } else {
        setStatus('error');
        setTimeout(() => {
          setCode('');
          setStatus('idle');
        }, 1000);
      }
    }
  };

  const handleDelete = () => {
    if (status !== 'idle' || code.length === 0) return;
    setCode(code.slice(0, -1));
  };

  // Keyboard support for desktop users
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (status !== 'idle') return;

      if (e.key >= '0' && e.key <= '9') {
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        handleDelete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code, status]);

  // UI state definitions
  const getPromptText = () => {
    if (status === 'success') return '참여코드 확인 완료! 잠시만 기다려주세요.';
    if (status === 'error') return '올바르지 않은 참여코드입니다.';
    return '참여코드 4자리를 입력하세요';
  };

  return (
    <div className="splash-screen fade-in">
      <div className="splash-header">
        <h1 className="splash-title">마음자리 나침반</h1>
        <p className="splash-subtitle">- Chulhee -</p>
      </div>

      <div className="splash-illustration-container">
        <img 
          src={splashHero} 
          className="splash-illustration" 
          alt="마음자리 나침반" 
        />
      </div>

      <div className="passcode-container">
        <p className={`passcode-prompt ${status}`}>
          {getPromptText()}
        </p>
        
        <div className={`passcode-dots ${status === 'error' ? 'shake' : ''}`}>
          {[0, 1, 2, 3].map((index) => {
            let dotClass = 'dot';
            if (status === 'success') {
              dotClass += ' success';
            } else if (status === 'error') {
              dotClass += ' error';
            } else if (index < code.length) {
              dotClass += ' filled';
            }
            return <div key={index} className={dotClass}></div>;
          })}
        </div>

        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button 
              key={num} 
              className="keypad-btn"
              onClick={() => handleKeyPress(num.toString())}
            >
              {num}
            </button>
          ))}
          <div className="keypad-btn empty"></div>
          <button 
            className="keypad-btn"
            onClick={() => handleKeyPress('0')}
          >
            0
          </button>
          <button 
            className="keypad-btn delete"
            onClick={handleDelete}
          >
            지우기
          </button>
        </div>
      </div>

      <div className="splash-footer">
        <p>© 2026 Chulhee. All rights reserved.</p>
      </div>
    </div>
  );
}

export default SplashScreen;
