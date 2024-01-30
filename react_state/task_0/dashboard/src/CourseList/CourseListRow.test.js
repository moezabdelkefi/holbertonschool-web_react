import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('renders one cell with colspan=2 when textSecondCell does not exist', () => {
    const { getByText } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const cell = getByText('Header');
    expect(cell.colSpan).toBe(2);
});

test('renders two cells when textSecondCell is present', () => {
    const { getAllByRole } = render(
        <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="SecondHeader" />
    );
    const cells = getAllByRole('cell');
    expect(cells.length).toBe(2);
});

test('renders two td elements within a tr element', () => {
    const { getAllByRole } = render(
        <CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />
    );
    const cells = getAllByRole('cell');
    expect(cells.length).toBe(2);

    test('CourseListRow renders with correct styles', () => {
        const { container } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
        expect(container.firstChild).toHaveStyle(`background-color: #deb5b545`);
        const { container: rowContainer } = render(<CourseListRow isHeader={false} textFirstCell="Row" textSecondCell="Row" />);
        expect(rowContainer.firstChild).toHaveStyle(`background-color: #f5f5f5ab`);
    });
    it('renders without crashing', () => {
        const wrapper = shallow(<CourseListRow />);
        expect(wrapper.exists()).toEqual(true);
    });
});
