import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index,
    };
};

export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index,
    };
};

export const setCourses = (courses) => {
    return {
        type: SET_COURSES,
        courses,
    };
};

export const fetchCourses = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('courses.json');
            if (!response.ok) {
                throw new Error('Failed to fetch courses');
            }
            const data = await response.json();
            dispatch(setCourses(data));
        } catch (error) {
            console.error('Error fetching courses:', error.message);
        }
    };
};

