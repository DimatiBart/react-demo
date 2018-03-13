import React from "react";

export default class CurrentTime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };

        this.intervalId = null;
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (
            <p>Current time is {this.state.time.toLocaleString()}</p>
        )
    }
}