import { normalize, schema } from 'normalizr';
import * as data from '../../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity(
    'messages',
    {},
    { idAttribute: 'guid' }
);

const notification = new schema.Entity(
    'notifications',
    {
        author: user,
        context: message,
    }
);

const normalizedData = normalize(data.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
    const { notifications, messages, users } = normalizedData.entities;

    const userNotifications = users[userId].notifications.map((id) => notifications[id]);
    return userNotifications.map((notification) => messages[notification.message]);
};

export default normalizedData;