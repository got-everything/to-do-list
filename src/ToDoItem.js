import React, { Component } from 'react';
import "./ToDoItem.css";
import Utils from './Utils';

class ToDoItem extends Component {
    constructor () {
        super();
        Utils.logMounting("     *************** MOUNTING ***************");
        Utils.logMounting("     ToDoItem constructor");

        this.firstLaunch = true;
    }

    render () {
        if (this.firstLaunch) {
            Utils.logMounting(`     ToDoItem render - ${this.props.value}`);
        } else {
            Utils.logUpdating(`     ToDoItem render - ${this.props.value}`);
        }
        this.firstLaunch = false;

        return (
            <li className="todoitem">
                <input  className="select"
                        type="checkbox" 
                        checked={this.props.finish}
                        onChange={
                            (event) => 
                            this.props.onFinishItem(this.props.id, 
                            event.currentTarget.checked)} />
                <label className="data" 
                       style={{textDecoration: this.props.finish?"line-through":"none"}}>
                           {this.props.value}
                </label>
                <button className="delete" 
                        onClick={() => this.props.onDeleteItem(this.props.id)}>
                    Delete
                </button>
            </li>
        );
    }

    componentWillMount () {
        Utils.logMounting(`     ToDoItem componentWillMount - ${this.props.value}`);
    }

    componentDidMount () {
        Utils.logMounting(`     ToDoItem componentDidMount - ${this.props.value}`);
    }

    componentWillReceiveProps (nextProps) {
        Utils.logUpdating("     *************** UPDATING ***************");
        Utils.logUpdating(`     ToDoItem componentWillReceiveProps - ${this.props.value}`);
    }

    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps === this.props) {
            Utils.logUpdating("     *************** UPDATING ***************");
        }
        Utils.logUpdating(`     ToDoItem shouldComponentUpdate - ${this.props.value}`);
        return true;
    }

    componentWillUpdate (nextProps, nextState) {
        Utils.logUpdating(`     ToDoItem componentWillUpdate - ${this.props.value}`);
    }

    componentDidUpdate (prevProps, prevState) {
        Utils.logUpdating(`     ToDoItem componentDidUpdate - ${this.props.value}`);
    }

    componentWillUnmount () {
        Utils.logUnmounting("     *************** UNMOUNTING ***************");
        Utils.logUnmounting(`     ToDoItem componentWillUnmount - ${this.props.value}`);
    }
}

export default ToDoItem;