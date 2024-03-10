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

function Login({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" className={css(styles.input)} value={email} onChange={handleChangeEmail} />
                <label htmlFor="password" className={css(styles.input)}>Password:</label>
                <input type="password" id="password" value={password} onChange={handleChangePassword} />
                <input type="submit" value="OK" />
            </form>
        </div>
    );
}

export default Login;
