import React, { Component } from 'react';
import './App.css';

import ToDoItem from './ToDoItem';

class App extends Component {

  render () {
    return (
      <div>
        <h1>To Do List</h1>
        <ul>
          <ToDoItem value="Get up early"/>
        </ul>
      </div>
    )
  }
}

export default App;
