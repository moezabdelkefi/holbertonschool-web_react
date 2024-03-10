import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('With CourseList Empty', () => {
    let getAllByRole;

    beforeEach(() => {
        const rendered = render(<CourseList />);
        getAllByRole = rendered.getAllByRole;
    });

    it('renders CourseList component without crashing', () => {
        expect(getAllByRole('row')).toBeTruthy();
    });

    it('renders no course rows', () => {
        const rows = getAllByRole('row');
        expect(rows.length).toBe(1);
    });
});

describe('With CourseList containing elements', () => {
    let getAllByRole;

    beforeEach(() => {
        const listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];
        const rendered = render(<CourseList listCourses={listCourses} />);
        getAllByRole = rendered.getAllByRole;
    });

    it('renders CourseList component without crashing', () => {
        expect(getAllByRole('row')).toBeTruthy();
    });

    it('renders the correct number of course rows', () => {
        const rows = getAllByRole('row');
        expect(rows.length).toBe(4);
    });
});