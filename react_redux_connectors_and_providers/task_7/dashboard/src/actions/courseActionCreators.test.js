import { fetchCourses } from './courseActionCreators';
import { FETCH_COURSE_SUCCESS } from './courseActionTypes';

describe('fetchCourses', () => {
    it('fetches courses and dispatches FETCH_COURSE_SUCCESS action', () => {
        const mockDispatch = jest.fn();
        const mockCourses = [{ id: 1, name: 'Course 1' }];

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockCourses),
            })
        );

        const expectedAction = { type: FETCH_COURSE_SUCCESS, data: mockCourses };

        return fetchCourses()(mockDispatch).then(() => {
            expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
}); 