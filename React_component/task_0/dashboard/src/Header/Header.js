import React from "react";
import HolbertonLogo from '../assets/HolbertonLogo.jpg';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img src={HolbertonLogo} />
            <h1>School dashboard</h1>
        </div>
    );
}

export default Header;