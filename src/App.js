import React, { Component } from 'react';
import './App.css';

import ToDoItem from './ToDoItem';

class App extends Component {

  constructor () {
    super();

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp (event) {
    console.log(event.keyCode);
  }

  render () {
    return (
      <div>
        <h1>To Do List</h1>
        {/* <input type="text" placeholder="add new todo" onKeyUp={this.onKeyUp}></input> */}
        <ul>
          <ToDoItem value="Get up early"/>
        </ul>
      </div>
    )
  }
}

export default App;
