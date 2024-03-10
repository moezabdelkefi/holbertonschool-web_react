import React from "react";
import { connect } from 'react-redux';
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

function Footer(props) {
    const { user } = props;

    return (
        <div className="footer">
            <p>
                Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {user.isLoggedIn && (
                <p>
                    <a href="/contact">Contact us</a>
                </p>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Footer);