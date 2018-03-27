import React from "react";

const Todo = props => (
    <li>
        {props.item.text}
        <button onClick={() => props.removeTodo(props.item.id)}>X</button>
    </li>
);

export default props => (
    <ul>
        {props.todos ? props.todos.map(todo => <Todo item={todo} removeTodo={props.removeTodo}/>) : <li>lol, nothing</li>}
    </ul>
)