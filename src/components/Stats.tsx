import React from 'react';
import './Stats.css';

interface StatsProps {
  wpm: number;
  accuracy: number;
  errors: number;
  isTyping: boolean;
  completed: boolean;
  timeElapsed: number;
}

const Stats: React.FC<StatsProps> = ({
  wpm,
  accuracy,
  errors,
  isTyping,
  completed,
  timeElapsed
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stats">
      <h2 className="stats-title">Statistics</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <div className="stat-value">{isTyping || completed ? wpm : '--'}</div>
            <div className="stat-label">WPM</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-value">{isTyping || completed ? `${accuracy}%` : '--'}</div>
            <div className="stat-label">Accuracy</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">❌</div>
          <div className="stat-content">
            <div className="stat-value">{isTyping || completed ? errors : '--'}</div>
            <div className="stat-label">Errors</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <div className="stat-value">
              {isTyping ? formatTime(timeElapsed) : completed ? formatTime(timeElapsed) : '--'}
            </div>
            <div className="stat-label">Time</div>
          </div>
        </div>
      </div>
      
      {isTyping && (
        <div className="typing-indicator">
          <div className="indicator-dot"></div>
          <span>Typing...</span>
        </div>
      )}
      
      {completed && (
        <div className="completion-stats">
          <div className="final-score">
            <span className="score-label">Final Score:</span>
            <span className="score-value">{wpm} WPM</span>
          </div>
          <div className="accuracy-display">
            <span className="accuracy-label">Accuracy:</span>
            <span className="accuracy-value">{accuracy}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats; 