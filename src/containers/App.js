import React from "react";
import {connect} from "react-redux";

import TodoList from "../components/todolist/index";
import AddTodo from "../components/addTodo/index";
import {addTodo, removeTodo} from "../actions/";

const App = props => (
    <div>
        <AddTodo addTodo={props.addTodo}/>
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);