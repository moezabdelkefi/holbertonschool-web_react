import React from "react";
import HolbertonLogo from '../assets/HolbertonLogo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    root: {
        '--main-color': '#e01d3f',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        color: 'var(--main-color)',
        fontSize: '20px',
        borderBottom: '3px solid var(--main-color)',
    },
    img: {
        width: '200px',
    },
});

function Header() {
    return (
        <div className={css(styles.header)}>
            <img src={HolbertonLogo} className={css(styles.img)} />
            <h1>School dashboard</h1>
        </div>
    );
}

export default Header;