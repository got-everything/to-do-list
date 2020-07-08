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
    this.onFinishItem = this.onFinishItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onKeyUp (event) {
    if (event.keyCode !== 13) return;

    let value = event.currentTarget.value;
    if (value.trim().length === 0) return;
    event.currentTarget.value = '';

    let items = clone(this.state.items);
    items.push({value: value, finish: false});
    this.setState({items: items});
  }

  onFinishItem (index, finish) {
    let items = clone(this.state.items);
    items.forEach((item, i) => {
      if (index === i) {
        item.finish = finish;
      }
    });
    this.setState({items: items});
  }

  onDeleteItem (index) {
    let items = clone(this.state.items);
    items = items.filter((item, i) => i !== index);
    this.setState({items: items});
  }

  render () {
    let todoitems = [];
    this.state.items.forEach((item, i) => {
      todoitems.push(
      <ToDoItem 
        key={i}
        id={i}
        value={item.value}
        finish={item.finish}
        onFinishItem={this.onFinishItem} 
        onDeleteItem={this.onDeleteItem}/>)
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
