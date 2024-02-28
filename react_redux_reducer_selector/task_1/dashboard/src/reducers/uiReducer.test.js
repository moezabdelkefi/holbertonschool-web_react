import { Map } from 'immutable';
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
    const initialState = Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
    });

    it('returns the initial state when no action is passed', () => {
        expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
    });

    it('returns the initial state when SELECT_COURSE action is passed', () => {
        expect(uiReducer(initialState, { type: SELECT_COURSE }).toJS()).toEqual(initialState.toJS());
    });

    it('changes isNotificationDrawerVisible correctly when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual({
            ...initialState.toJS(),
            isNotificationDrawerVisible: true,
        });
    });
});