import React from "react";
import { Link } from 'react-router-dom';

export default (props) => (
    <div>
        <p>Navigating with Link component:</p>
        <Link className="hoho" to="/">Go to root</Link>
        <Link className="hoho" to="/123">Go to id root</Link>
        <Link className="hoho" to="/location">Go to Location</Link>
        <Link className="hoho" to="/time">Go to Time</Link>
        <Link className="hoho" to="/todo">Go to Todo</Link>
        {/*<Link className="hoho" to="/zayac">Go to Zayac</Link>*/}
        {/*<Link className="hoho" to="/volk">Go to Volk</Link>*/}
        {/*<Link className="hoho" to="/zayac/volk/">Go to zayac-volk</Link>*/}
        <Link className="hoho" to="/qwe123asd">Go to ???</Link>
    </div>
)