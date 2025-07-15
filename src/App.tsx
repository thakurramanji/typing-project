import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TypingArea from './components/TypingArea';
import Stats from './components/Stats';
import Header from './components/Header';

const App: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [errors, setErrors] = useState(0);
  const [completed, setCompleted] = useState(false);

  const sampleTexts = [
    "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once.",
    "Programming is the art of telling another human being what one wants the computer to do. It requires logical thinking and creativity.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. Every day brings new opportunities.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking and don't settle.",
    "Innovation distinguishes between a leader and a follower. The future belongs to those who believe in the beauty of their dreams."
  ];

  const startNewTest = () => {
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setCurrentText(randomText);
    setUserInput('');
    setErrors(0);
    setStartTime(null);
    setEndTime(null);
    setIsTyping(false);
    setCompleted(false);
  };

  useEffect(() => {
    startNewTest();
  }, []);

  const handleInputChange = (value: string) => {
    if (!isTyping && value.length > 0) {
      setIsTyping(true);
      setStartTime(Date.now());
    }

    setUserInput(value);

    // Count errors
    let errorCount = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== currentText[i]) {
        errorCount++;
      }
    }
    setErrors(errorCount);

    // Check if completed
    if (value.length === currentText.length) {
      setEndTime(Date.now());
      setCompleted(true);
      setIsTyping(false);
    }
  };

  const calculateWPM = () => {
    if (!startTime || !endTime) return 0;
    const timeInMinutes = (endTime - startTime) / 60000;
    const words = currentText.split(' ').length;
    return Math.round(words / timeInMinutes);
  };

  const calculateAccuracy = () => {
    if (userInput.length === 0) return 100;
    const totalCharacters = currentText.length;
    const correctCharacters = totalCharacters - errors;
    return Math.round((correctCharacters / totalCharacters) * 100);
  };

  return (
    <div className="App">
      <div className="container">
        <Header onNewTest={startNewTest} />
        
        <div className="main-content">
          <TypingArea
            currentText={currentText}
            userInput={userInput}
            onInputChange={handleInputChange}
            isCompleted={completed}
          />
          
          <Stats
            wpm={calculateWPM()}
            accuracy={calculateAccuracy()}
            errors={errors}
            isTyping={isTyping}
            completed={completed}
            timeElapsed={startTime && endTime ? (endTime - startTime) / 1000 : 0}
          />
        </div>
      </div>
    </div>
  );
};

export default App; 