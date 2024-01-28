import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = { backgroundColor: '#f5f5f5ab' };
const headerRowStyle = { backgroundColor: '#deb5b545' };

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: 'white',
  },
  headerRow: {
    backgroundColor: 'grey',
  },
  defaultTh: {
    textAlign: 'left',
  },
  headerTh: {
    textAlign: 'center',
  },
});

class CourseListRow extends React.PureComponent {
  render() {
    const { isHeader, textFirstCell, textSecondCell } = this.props;
    const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
    const thStyle = isHeader ? styles.headerTh : styles.defaultTh;

    return (
      <tr className={css(rowStyle)}>
        {isHeader ? (
          textSecondCell ? (
            <>
              <th className={css(thStyle)}>{textFirstCell}</th>
              <th className={css(thStyle)}>{textSecondCell}</th>
            </>
          ) : (
            <th colSpan="2" className={css(thStyle)}>{textFirstCell}</th>
          )
        ) : (
          <>
            <td className={css(thStyle)}>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        )}
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
