import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTubeForm from './components/YouTubeForm';
import OldYouTubeForm from './components/OldYouTubeForm';
import NewYouTubeForm from './components/NewYouTubeForm';

function App() {
  return (
    <div className="App">
      {/* <YouTubeForm/> */}
      {/* <OldYouTubeForm/> */}
      <NewYouTubeForm/>
    </div>
  );
}

export default App;
