import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from "../Notifications/Notifications";
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
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ],
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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

  markNotificationAsRead(id) {
    const updatedNotifications = this.state.listNotifications.filter(notification => notification.id !== id);
    this.setState({ listNotifications: updatedNotifications });
  }

  render() {
    const { displayDrawer, user, listNotifications, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <React.Fragment>
        <AppContext.Provider value={{ user, logOut: this.logOut }}>
          <div className={css(styles.body)}>
            <Notifications
              displayDrawer={displayDrawer}
              listNotifications={listNotifications}
              markNotificationAsRead={this.markNotificationAsRead}
            />
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
  listNotifications: PropTypes.array.isRequired,
  listCourses: PropTypes.array.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

App.defaultProps = {
  listNotifications: [],
  listCourses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(App);