import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchNotifications, markAsAread } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

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
    menuItem: {
        textAlign: 'right',
    },
});

class Notifications extends PureComponent {
    componentDidMount() {
        this.props.fetchNotifications();
    }

    render() {
        const { listNotifications, markNotificationAsRead } = this.props;

        return (
            <div className={css(styles.notifications)}>
                <button
                    style={{
                        background: "transparent",
                        border: "none",
                        position: "absolute",
                        right: 20,
                    }}
                    aria-label="Close"
                    onClick={this.props.hideNotificationDrawer}
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
                                    markAsRead={() => markNotificationAsRead(id)}
                                    id={id}
                                >
                                    {html ? <div dangerouslySetInnerHTML={html} /> : null}
                                </NotificationItem>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

Notifications.propTypes = {
    listNotifications: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        value: PropTypes.string,
        html: PropTypes.shape({
            __html: PropTypes.string,
        }),
    })),
    markNotificationAsRead: PropTypes.func.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
    hideNotificationDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
    listNotifications: [],
};

const mapStateToProps = (state) => {
    return {
        listNotifications: getUnreadNotifications(state),
    };
};

const mapDispatchToProps = {
    fetchNotifications,
    markAsAread,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);