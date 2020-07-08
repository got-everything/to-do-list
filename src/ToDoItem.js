import React from 'react';

function ToDoItem (props) {
    return (
        <li>
            <label>{props.value}</label>
            <button onClick={() => props.onDeleteItem(props.id)}>
                Delete
            </button>
        </li>
    )
}

export default ToDoItem;