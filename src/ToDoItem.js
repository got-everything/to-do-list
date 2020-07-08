import React from 'react';
import "./ToDoItem.css";

function ToDoItem (props) {
    return (
        <li className="todoitem">
            <input  className="select"
                    type="checkbox" 
                    checked={props.finish}
                    onChange={(event) => props.onFinishItem(props.id, event.currentTarget.checked)} />
            <label className="data" style={{textDecoration: props.finish?"line-through":"none"}}>{props.value}</label>
            <button className="delete" onClick={() => props.onDeleteItem(props.id)}>
                Delete
            </button>
        </li>
    )
}

export default ToDoItem;