import React from "react";
import HolbertonLogo from '../assets/HolbertonLogo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/authActions';

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
    welcomeSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        background: 'lightgray',
    },
    logoutLink: {
        cursor: 'pointer',
        color: 'blue',
        textDecoration: 'underline',
        marginLeft: '10px',
    },
});

class Header extends React.Component {
    render() {
        const { isLoggedIn, user, logout } = this.props;

        return (
            <div className={css(styles.root)}>
                <div className={css(styles.header)}>
                    <img src={HolbertonLogo} className={css(styles.img)} alt="Holberton Logo" />
                    <h1>School dashboard</h1>
                </div>
                {isLoggedIn && (
                    <div className={css(styles.welcomeSection)} id="logoutSection">
                        Welcome {user.email}
                        <span className={css(styles.logoutLink)} onClick={logout}>
                            (logout)
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);