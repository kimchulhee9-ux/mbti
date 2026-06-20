import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'question', 'result'
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [mbtiResult, setMbtiResult] = useState('');

  const startTest = () => {
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setCurrentScreen('question');
  };

  const handleTestComplete = (finalScores) => {
    // Calculate MBTI
    const EorI = finalScores.E >= finalScores.I ? 'E' : 'I';
    const SorN = finalScores.S >= finalScores.N ? 'S' : 'N';
    const TorF = finalScores.T >= finalScores.F ? 'T' : 'F';
    const JorP = finalScores.J >= finalScores.P ? 'J' : 'P';
    
    const result = `${EorI}${SorN}${TorF}${JorP}`;
    setMbtiResult(result);
    setCurrentScreen('result');
  };

  const restartTest = () => {
    setCurrentScreen('start');
  };

  return (
    <div className="app-container">
      {currentScreen === 'start' && <StartScreen onStart={startTest} />}
      {currentScreen === 'question' && (
        <QuestionScreen 
          onComplete={handleTestComplete} 
          scores={scores} 
          setScores={setScores} 
        />
      )}
      {currentScreen === 'result' && (
        <ResultScreen resultType={mbtiResult} onRestart={restartTest} />
      )}
    </div>
  );
}

export default App;
