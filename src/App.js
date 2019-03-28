import React, { Component } from 'react';
import './App.css';
import Presentation from './componants/Presentation/Presentation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Presentation />
        </header>
      </div>
    );
  }
}

export default App;
