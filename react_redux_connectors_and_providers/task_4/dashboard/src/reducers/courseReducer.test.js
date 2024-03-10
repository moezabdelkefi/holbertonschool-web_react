import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
    const initialState = [];

    it('returns the initial state when no action is passed', () => {
        expect(courseReducer(undefined, {})).toEqual(initialState);
    });

    it('returns the correct state when FETCH_COURSE_SUCCESS action is passed', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: "ES6", credit: 60 },
                { id: 2, name: "Webpack", credit: 20 },
                { id: 3, name: "React", credit: 40 }
            ]
        };
        const expectedState = action.data.map(course => ({ ...course, isSelected: false }));
        expect(courseReducer(initialState, action)).toEqual(expectedState);
    });

    it('returns the correct state when SELECT_COURSE action is passed', () => {
        const state = [
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
            { id: 3, name: "React", isSelected: false, credit: 40 }
        ];
        const action = { type: SELECT_COURSE, index: 2 };
        const expectedState = state.map(course => course.id === action.index ? { ...course, isSelected: true } : course);
        expect(courseReducer(state, action)).toEqual(expectedState);
    });

    it('returns the correct state when UNSELECT_COURSE action is passed', () => {
        const state = [
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: true, credit: 20 },
            { id: 3, name: "React", isSelected: false, credit: 40 }
        ];
        const action = { type: UNSELECT_COURSE, index: 2 };
        const expectedState = state.map(course => course.id === action.index ? { ...course, isSelected: false } : course);
        expect(courseReducer(state, action)).toEqual(expectedState);
    });
});