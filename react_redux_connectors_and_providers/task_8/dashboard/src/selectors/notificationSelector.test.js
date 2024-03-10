import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationSelector', () => {
    const state = fromJS({
        filter: 'DEFAULT',
        notifications: {
            1: { id: 1, isRead: false, type: "default", value: "New course available" },
            2: { id: 2, isRead: false, type: "urgent", value: "New resume available" },
            3: { id: 3, isRead: true, type: "urgent", value: "New data available" }
        }
    });

    it('filterTypeSelected works as expected', () => {
        expect(filterTypeSelected(state)).toEqual('DEFAULT');
    });

    it('getNotifications returns a list of the message entities within the reducer', () => {
        expect(getNotifications(state).toJS()).toEqual({
            1: { id: 1, isRead: false, type: "default", value: "New course available" },
            2: { id: 2, isRead: false, type: "urgent", value: "New resume available" },
            3: { id: 3, isRead: true, type: "urgent", value: "New data available" }
        });
    });

    it('getUnreadNotifications return a list of the message entities within the reducer', () => {
        expect(getUnreadNotifications(state).toJS()).toEqual({
            1: { id: 1, isRead: false, type: "default", value: "New course available" },
            2: { id: 2, isRead: false, type: "urgent", value: "New resume available" }
        });
    });

    it('getUnreadUrgentNotifications return a list of unread urgent message entities within the reducer', () => {
        expect(getUnreadUrgentNotifications(state).toJS()).toEqual({
            2: { id: 2, isRead: false, type: "urgent", value: "New resume available" }
        });
    });
});
