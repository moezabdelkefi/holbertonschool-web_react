import { markAsRead, setNotificationFilter, fetchNotifications } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

describe('notificationActionCreators', () => {
    it('markAsRead returns the correct action', () => {
        const action = markAsRead(1);
        expect(action).toEqual({ type: MARK_AS_READ, index: 1 });
    });

    it('setNotificationFilter returns the correct action', () => {
        const action = setNotificationFilter('URGENT');
        expect(action).toEqual({ type: SET_TYPE_FILTER, filter: 'URGENT' });
    });

    it('fetchNotifications dispatches FETCH_NOTIFICATIONS_SUCCESS action on success', async () => {
        const mockData = [
            { id: 1, type: "default", value: "Notification 1" },
            { id: 2, type: "urgent", value: "Notification 2" }
        ];

        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockData),
        });

        const dispatch = jest.fn();
        await fetchNotifications()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: mockData
        });
    });

    it('fetchNotifications does not dispatch any action on failure', async () => {
        jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Failed to fetch'));

        const dispatch = jest.fn();
        await fetchNotifications()(dispatch);

        expect(dispatch).not.toHaveBeenCalled();
    });
});
