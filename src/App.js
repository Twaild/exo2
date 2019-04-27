import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList'
import Button from '../node_modules/@material-ui/core/Button/Button'
import Card from '../node_modules/@material-ui/core/Card';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <ToDoList />
        </header>
      </div>
    );
  }
}

export default App;
