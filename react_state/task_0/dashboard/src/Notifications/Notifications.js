import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    notifications: {
        float: 'right',
        border: '2px dashed #e01d3f',
        padding: '10px',
        marginBottom: '20px',
    },
    buttonImg: {
        width: '10px',
    },
    p: {
        margin: '0',
        marginTop: '15px',
    },
    defaultNotification: {
        color: 'blue',
    },
    urgentNotification: {
        color: 'red',
    },
    menuItem: {
        textAlign: 'right',
    },
    panel: {
        '@media (max-width: 900px)': {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            padding: 0,
            fontSize: '20px',
        },
    },
});

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { handleDisplayDrawer, handleHideDrawer, listNotifications } = this.props;

        return (
            <div className={css(styles.notifications)} onClick={handleDisplayDrawer}>
                <button
                    style={{
                        background: "transparent",
                        border: "none",
                        position: "absolute",
                        right: 20,
                    }}
                    aria-label="Close"
                    onClick={handleHideDrawer}
                >
                    <img className={css(styles.buttonImg)} src={closeIcon} alt="Close" />

                </button>
                {listNotifications.length === 0 ? (
                    <p>No new notification for now</p>
                ) : (
                    <div>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {listNotifications.map(({ id, type, value, html }) => (
                                <NotificationItem
                                    key={id}
                                    type={type}
                                    value={value}
                                    html={html}
                                    markAsRead={this.markAsRead}
                                    id={id}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

Notifications.propTypes = {
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    listNotifications: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        value: PropTypes.string,
        html: PropTypes.shape({
            __html: PropTypes.string,
        }),
    })),
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
};

export default Notifications;