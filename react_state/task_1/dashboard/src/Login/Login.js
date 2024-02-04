import React, { useState } from "react";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    login: {
        margin: '50px',
    },
    input: {
        marginLeft: '20px',
        marginRight: '20px',
    },
    container: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    inputMargin: {
        margin: '0.3rem 0',
    },
});

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        enableSubmit: false,
        isLoggedIn: false,
    });

    const handleChangeEmail = (event) => {
        const newEmail = event.target.value;
        const newEnableSubmit = newEmail !== '' && loginData.password !== '';
        setLoginData({ ...loginData, email: newEmail, enableSubmit: newEnableSubmit });
    };

    const handleChangePassword = (event) => {
        const newPassword = event.target.value;
        const newEnableSubmit = loginData.email !== '' && newPassword !== '';
        setLoginData({ ...loginData, password: newPassword, enableSubmit: newEnableSubmit });
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        setLoginData({ ...loginData, isLoggedIn: true });
    };

    return (
        <div className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    className={css(styles.input)}
                    value={loginData.email}
                    onChange={handleChangeEmail}
                />
                <label htmlFor="password" className={css(styles.inputMargin)}>Password:</label>
                <input
                    type="password"
                    id="password"
                    className={css(styles.inputMargin)}
                    value={loginData.password}
                    onChange={handleChangePassword}
                />
                <input type="submit" value="OK" disabled={!loginData.enableSubmit} />
            </form>
        </div>
    );
}

export default Login;
