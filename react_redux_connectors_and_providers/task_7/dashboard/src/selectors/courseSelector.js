import { createSelector } from 'reselect';
const courseEntitiesSelector = (state) => state.courses;

export const getCourses = createSelector(
    courseEntitiesSelector,
    (courses) => courses.valueSeq()
);