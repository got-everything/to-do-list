import React from 'react';

function ToDoItem (props) {
    return (
        <li>
            <input  type="checkbox" 
                    checked={props.finish}
                    onChange={(event) => props.onFinishItem(props.id, event.currentTarget.checked)} />
            <label style={{textDecoration: props.finish?"line-through":"none"}}>{props.value}</label>
            <button onClick={() => props.onDeleteItem(props.id)}>
                Delete
            </button>
        </li>
    )
}

export default ToDoItem;