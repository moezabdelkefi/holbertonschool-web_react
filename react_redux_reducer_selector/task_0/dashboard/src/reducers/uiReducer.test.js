import uiReducer from './uiReducer';
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
    const initialState = {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
    };

    it('returns the initial state when no action is passed', () => {
        expect(uiReducer(undefined, {})).toEqual(initialState);
    });

    it('returns the initial state when SELECT_COURSE action is passed', () => {
        expect(uiReducer(initialState, { type: SELECT_COURSE })).toEqual(initialState);
    });

    it('changes isNotificationDrawerVisible correctly when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true,
        });
    });
});