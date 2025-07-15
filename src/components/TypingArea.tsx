import React, { useRef, useEffect } from 'react';
import './TypingArea.css';

interface TypingAreaProps {
  currentText: string;
  userInput: string;
  onInputChange: (value: string) => void;
  isCompleted: boolean;
}

const TypingArea: React.FC<TypingAreaProps> = ({
  currentText,
  userInput,
  onInputChange,
  isCompleted
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current && !isCompleted) {
      inputRef.current.focus();
    }
  }, [isCompleted]);

  const renderText = () => {
    return currentText.split('').map((char, index) => {
      let className = 'char';
      
      if (index < userInput.length) {
        if (userInput[index] === char) {
          className += ' correct';
        } else {
          className += ' incorrect';
        }
      } else if (index === userInput.length) {
        className += ' current';
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="typing-area">
      <div className="text-display">
        {renderText()}
      </div>
      
      <div className="input-container">
        <textarea
          ref={inputRef}
          value={userInput}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Start typing here..."
          disabled={isCompleted}
          className="typing-input"
          rows={3}
        />
        
        {isCompleted && (
          <div className="completion-message">
            <span className="completion-icon">🎉</span>
            Test completed! Click "New Test" to try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingArea; 