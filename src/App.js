import React from "react";

export default (props) => (
    <React.Fragment>
        <h1>Hello, {props.name}!</h1>
        <Clock />
    </React.Fragment>

);

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0
        };

        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    getTime() {
        return new Date().toTimeString().substr(0, 8);
    }
    tick() {
        this.setState({currentTime: this.getTime()})
    }
    render() {
        return <h2>
            Current time is {this.state.currentTime}
        </h2>
    }
}