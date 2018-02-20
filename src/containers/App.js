import React from "react";
import {connect} from "react-redux";

import TodoList from "../components/todolist/index";
import AddTodo from "../components/addTodo/index";
import {addTodo, removeTodo, addAsyncTodo} from "../actions/";

const App = props => (
    <div>
        <AddTodo addTodo={props.addTodo} addAsyncTodo={props.addAsyncTodo}/>
        <TodoList todos={props.todos} removeTodo={props.removeTodo}/>
    </div>
);

const mapStateToProps = state => ({
    todos: state
});

const mapDispatchToProps = dispatch => ({
    addTodo(text) {
        dispatch(addTodo(text))
    },
    removeTodo(id) {
        dispatch(removeTodo(id))
    },
    addAsyncTodo(text) {
        dispatch(addAsyncTodo(text))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);