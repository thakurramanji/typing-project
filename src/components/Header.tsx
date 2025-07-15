import React from 'react';
import './Header.css';

interface HeaderProps {
  onNewTest: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewTest }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">
          <span className="title-icon">⌨️</span>
          Typing Practice
        </h1>
        <button className="new-test-btn" onClick={onNewTest}>
          <span className="btn-icon">🔄</span>
          New Test
        </button>
      </div>
    </header>
  );
};

export default Header; 