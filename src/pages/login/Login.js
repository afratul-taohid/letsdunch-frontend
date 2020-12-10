import React, { useState } from 'react';
import './Login.css';
import banner from '../../img/banner.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import MoodIcon from '@material-ui/icons/Mood';
import { Link, Redirect } from 'react-router-dom';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    login({email: data.email, password: data.password});
    setEmail('');
    setPassword('');
    window.scrollTo(0, 0);
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="login registration">
      <div className="row">
        <div className="col-md-6">
          <img className="leftImage" src={banner} alt="" />
        </div>
        <div className="col-md-6 my-5">
          <div className="right-side">
            <h1 className="lets-dunch">
              LETS{' '}
              <span style={{ fontWeight: 'bold', color: '#ff595e' }}>
                DUNCH
              </span>
            </h1>
            <h3 className="registration--heading-tertiary">
              Login to your account
            </h3>
            <div className="registration__button">
              <button className="btn registration__button--facebook">
                <FacebookIcon className="facebook__icon" />
                join via facebook
              </button>
            </div>
            <div className="registration__form--container">
              <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="registration__form"
              >
                <div className="form-group">
                  <label htmlFor="email">
                    <p>Email</p>
                    <p>
                      {email.length !== 0 ? (
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                          email
                        ) === false ? (
                          <span className="bad">
                            {' '}
                            Please enter your email{' '}
                            <MoodBadIcon className="bad" />
                          </span>
                        ) : (
                          <span>
                            <MoodIcon className="good" />
                          </span>
                        )
                      ) : (
                        ''
                      )}
                    </p>
                  </label>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="registration__input"
                    id="email"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <p>Password</p>
                    <p>
                      {password.length !== 0 ? (
                        password.length <= 5 ? (
                          <span className="bad">
                            {' '}
                            Please enter your password with 6 characters{' '}
                            <MoodBadIcon className="bad" />
                          </span>
                        ) : (
                          <span>
                            <MoodIcon className="good" />
                          </span>
                        )
                      ) : (
                        ''
                      )}
                    </p>
                  </label>
                  <input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="registration__input"
                    id="password"
                    ref={register({ required: true })}
                  />
                </div>

                <div className="registration__submit--button--container">
                  <span>
                    Don't Have an account? <Link to="/login">Register</Link>
                  </span>

                  <button className="btn login-button submit--button">
                    Login
                  </button>
                </div>
                <p className="terms">
                  By joining you agree to the <Link to="/terms">Terms</Link> and{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>{' '}
                </p>
                <button className="business-user">
                  Business user, click here to register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.protoType = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
