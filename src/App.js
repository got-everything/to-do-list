import React, { Component } from 'react';
import './App.css';

import ToDoItem from './ToDoItem';

function clone(a) {
  return JSON.parse(JSON.stringify(a));
}

class App extends Component {

  constructor () {
    super();

    this.state = {
      items: [] //{value}
    }

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp (event) {
    if (event.keyCode !== 13) return;

    let value = event.currentTarget.value;
    if (value.trim().length === 0) return;
    event.currentTarget.value = '';

    let items = clone(this.state.items);
    items.push({value: value});
    this.setState({items: items});
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
