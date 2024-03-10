import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from './actions/uiActionCreators';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
    displayDrawer: state.uiReducer.isNotificationDrawerVisible,
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, sans-serif',
    marginTop: 50,
    marginLeft: 30,
  },
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTop: '3px solid #e0344a',
    textAlign: 'center',
    fontStyle: 'italic',
    backgroundColor: '#fff',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      }
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <AppContext.Provider value={{ user, logOut: this.logOut }}>
          <div className={css(styles.body)}>
            <Header />
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={this.props.listCourses} />
            </BodySectionWithMarginBottom>
            <BodySection title='News from the School'>
              <p>Some random text</p>
            </BodySection>
            <Footer className={css(styles.footer)} />
          </div>
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  listCourses: PropTypes.array.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

App.defaultProps = {
  listCourses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
