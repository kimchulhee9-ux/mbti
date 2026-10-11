import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import { questions, seniorQuestions } from './data/questions';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash'); // 'splash', 'start', 'question', 'result'
  const [userName, setUserName] = useState('');
  const [group, setGroup] = useState('student'); // 'student', 'parent', 'senior' (참여코드로 결정)
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [finalScores, setFinalScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [mbtiResult, setMbtiResult] = useState('');

  // 시니어는 20문항, 학생·학부모는 40문항
  const activeQuestions = group === 'senior' ? seniorQuestions : questions;

  const startTest = (name) => {
    setUserName(name);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setCurrentScreen('question');
  };

  const handleTestComplete = (completedScores) => {
    // 성향 유형 계산
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
    setUserName('');
    setCurrentScreen('start');
  };

  return (
    <div className="app-container">
      {currentScreen === 'splash' && <SplashScreen onUnlock={(g) => { setGroup(g || 'student'); setCurrentScreen('start'); }} />}
      {currentScreen === 'start' && <StartScreen onStart={startTest} questionCount={activeQuestions.length} />}
      {currentScreen === 'question' && (
        <QuestionScreen
          onComplete={handleTestComplete}
          scores={scores}
          setScores={setScores}
          questions={activeQuestions}
        />
      )}
      {currentScreen === 'result' && (
        <ResultScreen 
          resultType={mbtiResult} 
          scores={finalScores} 
          onRestart={restartTest} 
          userName={userName}
          group={group}
        />
      )}
    </div>
  );
}

export default App;
