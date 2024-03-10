import { fromJS } from 'immutable';
import { getCourses } from './courseSelector';

describe('getCourses', () => {
    it('returns a List of courses', () => {
        const mockState = fromJS({
            courses: {
                1: { id: 1, name: 'Course 1' },
                2: { id: 2, name: 'Course 2' },
            },
        });

        const courses = getCourses(mockState);

        expect(courses).toEqual(fromJS([
            { id: 1, name: 'Course 1' },
            { id: 2, name: 'Course 2' },
        ]));
    });
});