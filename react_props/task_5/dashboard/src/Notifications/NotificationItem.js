import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', value, html }) {
    if (html) {
        return <li data-notification-type={type} dangerouslySetInnerHTML={html} />;
    }
    return <li data-notification-type={type}>{value}</li>;
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    })
};

export default NotificationItem;