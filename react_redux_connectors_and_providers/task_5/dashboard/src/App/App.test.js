import React from 'react';
import { shallow } from "enzyme";
import App from "./App";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import { mapStateToProps } from './index.js';
import { fromJS } from 'immutable';

describe("<App />", () => {
    it("App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('contains the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).toEqual(true);
    });

    it('contains the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toEqual(true);
    });

    it('mapStateToProps correctly extracts the information from the Redux store', () => {
        const state = fromJS({
            isNotificationDrawerVisible: true,
        });
        const expectedOutput = {
            displayDrawer: true,
        };
        expect(mapStateToProps(state)).toEqual(expectedOutput);
    });
    it('should return the right object when passing state', () => {
        let state = fromJS({
            ui: {
                isUserLoggedIn: true
            }
        });

        expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
    });
});
