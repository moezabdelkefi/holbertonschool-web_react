import { shallow, mount } from "enzyme";
import App from "./App";
import React from 'react';
import { Notifications } from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

describe("<App />", () => {
    it("App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('contains the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notifications />)).toEqual(true);
    });

    it('contains the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).toEqual(true);
    });

    it('contains the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toEqual(true);
    });

    it('contains the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer />)).toEqual(true);
    });
    it('calls logOut and alert when "Control" and "h" are pressed', () => {
        const logOut = jest.fn();
        global.alert = jest.fn();

        const wrapper = mount(<App logOut={logOut} />);

        // Simulate 'Control' and 'h' keys pressed
        wrapper.simulate('keydown', { key: 'h', ctrlKey: true });

        expect(logOut).toHaveBeenCalled();
        expect(global.alert).toHaveBeenCalledWith('Logging you out');

        // Clean up
        wrapper.unmount();
        global.alert.mockRestore();
    });
});