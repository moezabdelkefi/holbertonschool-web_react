import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';
import { render, fireEvent } from '@testing-library/react';

describe("<Notifications />", () => {
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
    test('markAsRead is called with the right id', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const { getByText } = render(<Notifications />);
        fireEvent.click(getByText('Notification 1'));
        expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
        consoleSpy.mockRestore();
    });
});