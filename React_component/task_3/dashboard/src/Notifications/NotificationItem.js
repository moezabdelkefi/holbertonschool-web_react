import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
    render() {
        const { type, value, html, id, markAsRead } = this.props;
        return (
            <div className={`item ${type}`} data-notification-type={type} onClick={() => markAsRead(id)}>
                {value ? value : <div dangerouslySetInnerHTML={html} />}
            </div>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: {},
    markAsRead: () => { },
    id: NaN,
};

export default NotificationItem;