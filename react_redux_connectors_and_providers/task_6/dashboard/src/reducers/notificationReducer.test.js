import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    const initialState = {
        filter: 'DEFAULT',
        notifications: [],
    };

    it('returns the initial state when no action is passed', () => {
        expect(notificationReducer(undefined, {})).toEqual(initialState);
    });

    it('returns the correct state when FETCH_NOTIFICATIONS_SUCCESS action is passed', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" }
            ]
        };
        const expectedState = {
            ...initialState,
            notifications: action.data.map(notification => ({ ...notification, isRead: false })),
        };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('returns the correct state when MARK_AS_READ action is passed', () => {
        const state = {
            ...initialState,
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: false, type: "urgent", value: "New resume available" },
                { id: 3, isRead: false, type: "urgent", value: "New data available" }
            ]
        };
        const action = { type: MARK_AS_READ, index: 2 };
        const expectedState = {
            ...state,
            notifications: state.notifications.map(notification =>
                notification.id === action.index ? { ...notification, isRead: true } : notification
            ),
        };
        expect(notificationReducer(state, action)).toEqual(expectedState);
    });

    it('returns the correct state when SET_TYPE_FILTER action is passed', () => {
        const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
        const expectedState = { ...initialState, filter: action.filter };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });
});
