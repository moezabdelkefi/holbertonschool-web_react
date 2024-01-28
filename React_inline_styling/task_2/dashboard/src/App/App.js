import React from 'react';
import PropTypes from 'prop-types';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    fontfamily: 'Arial, sans-serif',
    margintop: 50,
    marginleft: 30,
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ]
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.body)}>
          <Notifications />
          <Header />
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>
          <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={this.state.listCourses} />
          </BodySectionWithMarginBottom>
          <BodySection title='News from the School'>
            <p>Some random text</p>
          </BodySection>
          <Footer className={css(styles.footer)} />
        </div>
      </React.Fragment >
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;