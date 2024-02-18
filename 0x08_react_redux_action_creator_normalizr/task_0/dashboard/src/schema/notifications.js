import * as data from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
    const { notifications } = data.default;

    let result = [];
    for (const key in notifications) {
        const notification = notifications[key];
        if (notification.author.id === userId) {
            result.push(notification.context);
        }
    }

    return result;
}