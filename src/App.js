import React from "react";

export default (props) => (
    <React.Fragment>
        <h1>Hello, {props.name}!</h1>
        <Magic magic="magic"/>
    </React.Fragment>

);

class Magic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0
        };

        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    tick() {
        this.setState((prevState) => ({currentNumber: prevState.currentNumber + 1}))
    }
    render() {
        return <span>
            {this.state.currentNumber}
        </span>
    }
}