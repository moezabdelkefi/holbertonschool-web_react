import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from "./close-icon.png";

export function Notifications() {
    const handleclick = () => {
        console.log('Close button has been clicked');
    }

    return (
        <div className="Notifications">
            <button style={{
                position: 'absolute', top: '10px',
                right: '10px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
            }}
                aria-label='Close'
                onClick={handleclick}
            >
                <img src={closeIcon} alt="close-icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}