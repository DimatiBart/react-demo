import React from "react";


export default class CurrentLocation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: null
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            this.setState({
                location: coords
            });
        })
    }
    getLocation() {
        return this.state.location ?
            `lat: ${this.state.location.latitude}, lng: ${this.state.location.longitude}` :
            "¯\\_(ツ)_/¯";
    }
    render() {
        return (
            <p>Current location is {this.getLocation()}</p>
        )
    }
}