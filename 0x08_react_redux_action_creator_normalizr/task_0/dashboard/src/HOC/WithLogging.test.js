import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
    console.log = jest.fn();

    afterEach(() => {
        console.log.mockRestore();
    });

    it('logs on mount and unmount with "Component" when the wrapped element is pure html', () => {
        const WrappedComponent = WithLogging(() => <p />);
        const wrapper = mount(<WrappedComponent />);
        expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
    });

    it('logs on mount and unmount with the name of the component when the wrapped element is the Login component', () => {
        const WrappedComponent = WithLogging(Login);
        const wrapper = mount(<WrappedComponent />);
        expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
    });
});