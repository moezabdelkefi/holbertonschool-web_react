import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

const CourseList = ({ listCourses = [] }) => {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow isHeader={false} textFirstCell="No course available yet" />
                ) : (
                    listCourses.map((course, index) => (
                        <CourseListRow
                            key={index}
                            isHeader={false}
                            textFirstCell={course.name}
                            textSecondCell={course.credit}
                        />
                    ))
                )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            credit: PropTypes.number.isRequired,
        })
    ),
};

CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList;