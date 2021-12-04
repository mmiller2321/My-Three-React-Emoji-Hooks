//import logo from './logo.svg';
import './App.css';
import ClassicToggle from './ClassicToggle';
import HookToggle from './HookToggle';
import HookToggleUseToggle from './HookToggleUseToggle';
import React from 'react';

// Websites: https://emojipedia.org/

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to my Emoji Hooks!</h2>

        <p>Classic Toggle: <ClassicToggle /></p>        
        <p>Functional Component using a Hook: <HookToggle /></p>
        <p>Custom Hook: <HookToggleUseToggle /></p>
      </header>
      {/* <p>Hello World!</p> */}
    </div>
  );
}

export default App;