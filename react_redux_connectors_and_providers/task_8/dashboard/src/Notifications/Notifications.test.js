import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { setNotificationFilter } from '../actions/notificationActionCreators';

const mockStore = configureStore([]);

describe("<Notifications />", () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            notifications: {
                messages: [
                    { id: 1, type: "default", value: "Notification 1" },
                    { id: 2, type: "urgent", value: "Notification 2" }
                ]
            }
        };
        store = mockStore(initialState);
        wrapper = shallow(<Notifications store={store} />);
    });

    it('clicking on the first button should call setNotificationFilter with URGENT', () => {
        wrapper.find('#urgentButton').simulate('click');
        const actions = store.getActions();
        expect(actions).toEqual([setNotificationFilter('URGENT')]);
    });

    it('clicking on the second button should call setNotificationFilter with DEFAULT', () => {
        wrapper.find('#defaultButton').simulate('click');
        const actions = store.getActions();
        expect(actions).toEqual([setNotificationFilter('DEFAULT')]);
    });

    it('should have handleDisplayDrawer and handleHideDrawer as functions', () => {
        const wrapper = shallow(<Notifications />);
        expect(typeof wrapper.prop('handleDisplayDrawer')).toBe('function');
        expect(typeof wrapper.prop('handleHideDrawer')).toBe('function');
    });

    test('markAsRead is called with the right id', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const { getByText } = render(
            <Provider store={store}>
                <Notifications />
            </Provider>
        );
        fireEvent.click(getByText('Notification 1'));
        expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
        consoleSpy.mockRestore();
    });

    // New tests
    it('clicking on the first button should call setNotificationFilter with URGENT', () => {
        wrapper.find('#urgentButton').simulate('click');
        const actions = store.getActions();
        expect(actions).toEqual([setNotificationFilter('URGENT')]);
    });

    it('clicking on the second button should call setNotificationFilter with DEFAULT', () => {
        wrapper.find('#defaultButton').simulate('click');
        const actions = store.getActions();
        expect(actions).toEqual([setNotificationFilter('DEFAULT')]);
    });
});
