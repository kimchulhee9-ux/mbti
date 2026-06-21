import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'question', 'result'
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [finalScores, setFinalScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [mbtiResult, setMbtiResult] = useState('');

  const startTest = () => {
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setCurrentScreen('question');
  };

  const handleTestComplete = (completedScores) => {
    // Calculate MBTI
    const EorI = completedScores.E >= completedScores.I ? 'E' : 'I';
    const SorN = completedScores.S >= completedScores.N ? 'S' : 'N';
    const TorF = completedScores.T >= completedScores.F ? 'T' : 'F';
    const JorP = completedScores.J >= completedScores.P ? 'J' : 'P';

    const result = `${EorI}${SorN}${TorF}${JorP}`;
    setFinalScores(completedScores);
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
        <ResultScreen resultType={mbtiResult} scores={finalScores} onRestart={restartTest} />
      )}
    </div>
  );
}

export default App;
