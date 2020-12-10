import React, { Fragment, useEffect } from 'react';
import './App.css';
import NavigationBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VerifyEmail from './pages/verify-email/VerifyEmail';
import PaymentForm from './pages/PaymentForm/PaymentForm';
import { Alert } from './components/Alert/Alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setAuthToken from './utils/setAuthToken';
import Nearby from './pages/Nearby/Nearby';
import { loadUser } from './actions/auth';
import store from './store';
import Privacy from './pages/Privacy/Privacy';
import Cookies from './pages/Cookies/Cookies';
import Terms from './pages/Terms/Terms';
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';
import Events from './pages/Events/Events';
import Profile from './pages/profile/Profile';
import PrivateEvents from './pages/PrivateEvents/PrivateEvents';
import Landing from './pages/Landing/Landing';
import JSCookies from 'js-cookie';

const App = ({ alerts }) => {
  if (JSCookies.get('token')) {
    setAuthToken(JSCookies.get('token'));
  }

  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Alert alerts={alerts} />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/verify-email">
            <VerifyEmail />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/pay">
            <PaymentForm />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/cookies">
            <Cookies />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/private-events">
            <PrivateEvents />
          </Route>
          <Route path="/nearby/:city">
            <Nearby />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

App.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(App);
