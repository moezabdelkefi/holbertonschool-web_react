import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';

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
});