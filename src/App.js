import React, { Component } from 'react';
import './App.css';

import ToDoItem from './ToDoItem';
import Utils from './Utils';

function clone(a) {
  return JSON.parse(JSON.stringify(a));
}

class App extends Component {

  constructor () {
    super();
    Utils.logMounting("=============== MOUNTING ===============");
    Utils.logMounting("App constructor");

    this.state = {
      items: [] //{value}
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onFinishItem = this.onFinishItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);

    this.firstLaunch = true;
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
    if (this.firstLaunch) {
      Utils.logMounting("App render");
    } else {
      Utils.logUpdating("App render");
    }
    this.firstLaunch = false;
    
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
      <div className="App">
        <h1 className="title">To Do List</h1>
        <input type="text" placeholder="add new todo" className="new-item" onKeyUp={this.onKeyUp}></input>
        <ul>
          {todoitems}
        </ul>
      </div>
    )
  }

  componentWillMount () {
    Utils.logMounting("App componentWillMount");
  }

  componentDidMount () {
    Utils.logMounting("App componentDidMount");
  }

  componentWillReceiveProps (nextProps) {
    Utils.logUpdating("=============== UPDATING ===============");
    Utils.logUpdating("App componentWillReceiveProps");
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps === this.props) {
      Utils.logUpdating("=============== UPDATING ===============");
    }
    Utils.logUpdating("App shouldComponentUpdate");
    return true;
  }

  componentWillUpdate (nextProps, nextState) {
    Utils.logUpdating("App componentWillUpdate");
  }

  componentDidUpdate (prevProps, prevState) {
    Utils.logUpdating("App componentDidUpdate");
  }

  componentWillUnmount () {
    Utils.logUnmounting("=============== UNMOUNTING ===============");
    Utils.logUnmounting("App componentWillUnmount");
  }
}

export default App;
