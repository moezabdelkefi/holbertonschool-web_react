import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';

const styles = StyleSheet.create({
    courseList: {
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #ccc',
    },
    theadFirstChild: {
        textAlign: 'center',
    },
    theadTr: {
        borderBottom: '1px solid #ccc',
    },
    tdTh: {
        textAlign: 'left',
    },
    th: {
        fontFamily: 'sans-serif',
    },
});

const CourseList = ({ listCourses = [], fetchCourses, selectCourse, unSelectCourse }) => {
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    const onChangeRow = (id, checked) => {
        if (checked) {
            selectCourse(id);
        } else {
            unSelectCourse(id);
        }
    };

    return (
        <table className={css(styles.courseList)}>
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
                            isChecked={course.isSelected}
                            onChangeRow={(checked) => onChangeRow(course.id, checked)}
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
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            credit: PropTypes.string.isRequired,
            isSelected: PropTypes.bool.isRequired,
        })
    ),
    fetchCourses: PropTypes.func.isRequired,
    selectCourse: PropTypes.func.isRequired,
    unSelectCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    listCourses: getListCourses(state),
});

export default connect(mapStateToProps, { fetchCourses, selectCourse, unSelectCourse })(CourseList);
