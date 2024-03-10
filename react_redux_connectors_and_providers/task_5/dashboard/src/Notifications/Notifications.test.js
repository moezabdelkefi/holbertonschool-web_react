import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

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

    it("menu item is being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find(".menuItem").exists()).toEqual(true);
    });

    it("div.Notifications is not being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find(".Notifications").exists()).toEqual(false);
    });

    it("menu item is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(".menuItem").exists()).toEqual(true);
    });

    it("div.Notifications is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(".Notifications").exists()).toEqual(true);
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
});
