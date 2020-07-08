import React, { Component } from 'react';
import './App.css';

import ToDoItem from './ToDoItem';

class App extends Component {

  constructor () {
    super();

    this.state = {
      items: [
        {value: 'Get up early'},
        {value: 'Make a cup of tea'}
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp (event) {
    console.log(event.keyCode);
  }

  render () {
    let todoitems = [];
    this.state.items.forEach((item, i) => {
      todoitems.push(
      <ToDoItem 
        key={i}
        value={item.value} />)
    })

    return (
      <div>
        <h1>To Do List</h1>
        <input type="text" placeholder="add new todo" onKeyUp={this.onKeyUp}></input>
        <ul>
          {todoitems}
        </ul>
      </div>
    )
  }
}

export default App;
