import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { listNotifications } = this.props;
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
                    listNotifications.map(({ id, type, value, html }) => (
                        <NotificationItem
                            key={id}
                            type={type}
                            value={value}
                            html={html}
                            markAsRead={this.markAsRead}
                        />
                    ))
                )}
            </div>
        );
    }
}

Notifications.propTypes = {
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    listNotifications: [],
};

export default Notifications;