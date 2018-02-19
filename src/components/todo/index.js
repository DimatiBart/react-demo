import React from "react";

export default props => (
    <li>
        {props.item.text}
        <button onClick={() => props.removeTodo(props.item.id)}>X</button>
    </li>
)