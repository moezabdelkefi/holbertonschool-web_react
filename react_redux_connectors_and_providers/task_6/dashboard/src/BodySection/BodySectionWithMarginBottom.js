import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    margin: {
        marginBottom: '40px',
    },
});

class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className={css(styles.margin)}>
                <BodySection {...this.props} />
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default BodySectionWithMarginBottom;