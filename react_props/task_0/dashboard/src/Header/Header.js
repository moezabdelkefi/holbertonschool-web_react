import './Header.css';
import React from 'react';
import HolbertonLogo from '../assets/HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Header() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={HolbertonLogo} alt="Holberton Logo" />
                <h1>School dashboard</h1>
            </div>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" />

                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" />
                    <button>OK</button>
                </div>
            </div>
            <div className="App-footer">
                Copyright {getFullYear()} - {getFooterCopy(true)}
            </div>
        </div>
    );
}

export default Header;
