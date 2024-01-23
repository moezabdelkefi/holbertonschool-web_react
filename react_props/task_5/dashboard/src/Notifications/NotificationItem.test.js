import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correct html for type and value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.html()).toContain('data-notification-type="default"');
        expect(wrapper.text()).toContain('test');
    });

    it('renders correct html for html prop', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });
});