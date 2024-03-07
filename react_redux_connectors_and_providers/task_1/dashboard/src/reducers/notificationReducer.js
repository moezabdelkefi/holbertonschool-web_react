import { Map, fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map();

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return state.merge(fromJS(notificationsNormalizer(action.data).entities.notifications));
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        case MARK_AS_READ:
            return state.setIn([action.index.toString(), 'isRead'], true);
        default:
            return state;
    }
};

export default notificationReducer;