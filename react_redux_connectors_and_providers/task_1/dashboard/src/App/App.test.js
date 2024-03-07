import { shallow, mount } from "enzyme";
import App from "./App";
import React from 'react';
import { Notifications } from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { mapStateToProps } from './index.js';

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

        wrapper.simulate('keydown', { key: 'h', ctrlKey: true });

        expect(logOut).toHaveBeenCalled();
        expect(global.alert).toHaveBeenCalledWith('Logging you out');

        wrapper.unmount();
        global.alert.mockRestore();
    });
    it('verifies that the default state for displayDrawer is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toEqual(false);
    });

    it('verifies that after calling handleDisplayDrawer, the state should now be true', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state().displayDrawer).toEqual(true);
    });

    it('verifies that after calling handleHideDrawer, the state is updated to be false', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer(); // first set it to true
        wrapper.instance().handleHideDrawer(); // then set it back to false
        expect(wrapper.state().displayDrawer).toEqual(false);
    });
    describe('mapStateToProps', () => {
        it('should return the right object when passing state', () => {
            let state = fromJS({
                uiReducer: {
                    isUserLoggedIn: true
                }
            });

            expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
        });
    });
});