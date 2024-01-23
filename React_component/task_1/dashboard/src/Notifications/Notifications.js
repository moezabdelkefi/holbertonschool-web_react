import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';

function Notifications({ listNotifications }) {
    return (
        <div className="Notifications">
            <button
                style={{
                    background: "transparent",
                    border: "none",
                    position: "absolute",
                    right: 20,
                }}
                aria-label="close"
            >
                <img src={closeIcon} alt="close-icon" />
            </button>
            {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
            ) : (
                <>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.map(({ id, type, value, html }) => (
                            <NotificationItem key={id} type={type} value={value} html={html} />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;