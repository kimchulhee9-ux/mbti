import React, { useState } from 'react';
import { questions, seniorQuestions } from '../data/questions';
import './StartScreen.css';

const GROUP_OPTIONS = [
  { key: 'student', label: '학생', icon: '🎒' },
  { key: 'parent', label: '학부모', icon: '👨‍👩‍👧' },
  { key: 'senior', label: '시니어', icon: '🌿' },
];

function StartScreen({ onStart, initialGroup = '' }) {
  const [name, setName] = useState('');
  const [group, setGroup] = useState(initialGroup);
  const [showWarning, setShowWarning] = useState(false);
  const [showGroupWarning, setShowGroupWarning] = useState(false);

  const questionCount = group === 'senior' ? seniorQuestions.length : questions.length;

  const handleStartClick = () => {
    const trimmedName = name.trim();
    if (!group) {
      setShowGroupWarning(true);
    }
    if (!trimmedName) {
      setShowWarning(true);
    }
    if (!group || !trimmedName) return;
    onStart(trimmedName, group);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleStartClick();
    }
  };

  return (
    <div className="start-screen fade-in">
      <div className="title-container">
        <h1>나의 진짜 모습은?</h1>
        <p className="subtitle">내 마음이 가리키는 방향을 찾아서</p>
        <p className="creator-text">- chulhee -</p>
      </div>
      
      <div className="illustration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="group-select-container">
        <p className="name-label">나는 누구인가요?</p>
        <div className="group-buttons">
          {GROUP_OPTIONS.map((g) => (
            <button
              key={g.key}
              type="button"
              className={`group-button ${group === g.key ? 'selected' : ''}`}
              onClick={() => {
                setGroup(g.key);
                setShowGroupWarning(false);
              }}
            >
              <span className="group-icon">{g.icon}</span>
              <span>{g.label}</span>
            </button>
          ))}
        </div>
        {showGroupWarning && !group && (
          <p className="warning-text">학생 / 학부모 / 시니어 중 하나를 골라주세요.</p>
        )}
      </div>

      <div className="name-input-container">
        <label htmlFor="name-input" className="name-label">이름을 입력해주세요</label>
        <input 
          id="name-input"
          type="text" 
          className={`name-input ${showWarning && !name.trim() ? 'warning' : ''}`}
          placeholder="예: 홍길동" 
          value={name} 
          onChange={(e) => {
            setName(e.target.value);
            if (e.target.value.trim()) {
              setShowWarning(false);
            }
          }}
          onKeyDown={handleKeyPress}
          maxLength={10}
        />
        {showWarning && !name.trim() && (
          <p className="warning-text">이름을 입력해야 테스트를 시작할 수 있습니다.</p>
        )}
      </div>

      <div className="info">
        <p>⏱ 소요 시간: 약 3분</p>
        <p>📝 총 {questionCount}문항</p>
      </div>

      <button className="start-button" onClick={handleStartClick}>
        검사 시작하기
      </button>
    </div>
  );
}

export default StartScreen;
