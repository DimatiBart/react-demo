import React from "react";
import { withRouter } from "react-router-dom";

const ChangeButtons =  (props) => (
    <div>
        <p>Navigating with programmatically:</p>
        <button className="hoh" onClick={() => {props.history.push("/")}}>Go to root</button>
        {/*<button className="hoh" onClick={() => {props.history.push("/123")}}>Go to id root</button>*/}
        <button className="ho" onClick={() => {props.history.replace("/location")}}>Go to Location</button>
        <button className="hoh" onClick={() => {props.history.push("/time")}}>Go to Time</button>
        <button className="hoh" onClick={() => {props.history.goBack()}}>Go Back</button>
        {/*<button className="hoh" onClick={() => {props.history.push("/zayac")}}>Go to Zayac</button>*/}
        {/*<button className="hoh" onClick={() => {props.history.push("/volk")}}>Go to Volk</button>*/}
        {/*<button className="hoh" onClick={() => {props.history.push("/zayac/volk/")}}>Go to zayac-volk</button>*/}
        <button className="hoh" onClick={() => {props.history.push("/qwe123asd")}}>Go to ???</button>
    </div>
);

export default withRouter(ChangeButtons);