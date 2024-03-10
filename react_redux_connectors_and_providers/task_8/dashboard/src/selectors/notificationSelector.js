import { createSelector } from 'reselect';

export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => state.get('notifications');

export const getUnreadNotificationsByType = createSelector(
    [filterTypeSelected, getNotifications],
    (filter, notifications) => {
        switch (filter) {
            case 'URGENT':
                return notifications.filter(
                    notification => !notification.get('isRead') && notification.get('type') === 'urgent'
                );
            default:
                return notifications.filter(notification => !notification.get('isRead'));
        }
    }
);