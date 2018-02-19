import React from "react";
import Todo from "../todo/";

export default props => (
    <ul>
        {props.todos ? props.todos.map(todo => <Todo item={todo} removeTodo={props.removeTodo}/>) : "lol"}
    </ul>
)