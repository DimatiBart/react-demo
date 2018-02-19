import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.addTodo(this.input.value);
    }
    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input type="text" ref={(input) => {this.input = input}}/>
                <button type="submit">Add todo</button>
            </form>
        )
    }
}

export default AddTodo;