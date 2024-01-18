import React from "react";

function NotificationItem({ type, value, html }) {
    if (html) {
        return <li data-notification-type={type} dangerouslySetInnerHTML={html} />;
    }
    return <li data-notification-type={type}>{value}</li>;
}

export default NotificationItem;