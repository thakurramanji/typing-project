# Typing Practice App

A modern, beautiful React TypeScript application for improving typing speed and accuracy. Features real-time statistics, error tracking, and a responsive design.

## Features

- 🎯 **Real-time Statistics**: Track WPM (Words Per Minute), accuracy, and errors
- ⚡ **Live Feedback**: See correct/incorrect characters highlighted as you type
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful gradient backgrounds and smooth animations
- 🔄 **Multiple Texts**: Random selection of practice texts
- ⏱️ **Timer**: Track your typing time
- 🎉 **Completion Celebration**: Get feedback when you finish a test

## Screenshots

The app features:
- Clean, modern interface with gradient backgrounds
- Real-time character highlighting (green for correct, red for incorrect)
- Live statistics dashboard
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## How to Use

1. **Start Typing**: Click on the text area and begin typing the displayed text
2. **Track Progress**: Watch your WPM, accuracy, and errors update in real-time
3. **Complete the Test**: Finish typing the entire text to see your final score
4. **Start New Test**: Click "New Test" to try a different text

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **CSS3** - Modern styling with gradients and animations
- **Create React App** - Zero-configuration build tool

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # App header with title and new test button
│   ├── TypingArea.tsx      # Main typing interface
│   ├── Stats.tsx           # Statistics display
│   └── *.css               # Component-specific styles
├── App.tsx                 # Main application component
├── App.css                 # App-level styles
├── index.tsx               # Application entry point
└── index.css               # Global styles
```

## Future Enhancements

- [ ] User accounts and progress tracking
- [ ] Custom text input
- [ ] Different difficulty levels
- [ ] Leaderboards
- [ ] Practice history
- [ ] Keyboard layout visualization
- [ ] Sound effects
- [ ] Dark mode

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub. 