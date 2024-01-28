import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
    render() {
        const { type, value, html } = this.props;

        return (
            <li data-notification-type={type} dangerouslySetInnerHTML={html}>
                {value}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: {},
};

export default NotificationItem;