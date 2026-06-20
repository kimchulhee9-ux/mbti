import React, { useState } from 'react';
import { questions } from '../data/questions';
import './QuestionScreen.css';

function QuestionScreen({ onComplete, scores, setScores }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('slide-in-right');

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleOptionClick = (value) => {
    // Update score
    setScores(prev => ({
      ...prev,
      [value]: prev[value] + 1
    }));

    // Next question or complete
    if (currentIndex < questions.length - 1) {
      setAnimationClass('slide-out-left');
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setAnimationClass('slide-in-right');
      }, 300); // match transition time
    } else {
      // Create a final score object for immediate calculation
      const finalScores = {
        ...scores,
        [value]: scores[value] + 1
      };
      onComplete(finalScores);
    }
  };

  return (
    <div className="question-screen">
      <div className="progress-container">
        <div className="progress-text">{currentIndex + 1} / {questions.length}</div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className={`question-container ${animationClass}`}>
        <h2 className="question-text">{currentQuestion.text}</h2>
        
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button 
              key={index} 
              className="option-button"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionScreen;
