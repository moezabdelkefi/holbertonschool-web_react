import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { render, fireEvent } from '@testing-library/react';

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correct html for type and value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('.item').prop('data-notification-type')).toEqual('default');
        expect(wrapper.text()).toContain('test');
    });

    it('renders correct html for html prop', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });

    it('calls markAsRead with the right id when item is clicked', () => {
        const markAsReadSpy = jest.fn();
        const { getByText } = render(<NotificationItem id={1} markAsRead={markAsReadSpy} />);
        fireEvent.click(getByText('Notification 1'));
        expect(markAsReadSpy).toHaveBeenCalledWith(1);
    });
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toEqual(true);
    });

});