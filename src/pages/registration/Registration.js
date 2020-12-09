import React, { useState } from 'react';
import './Registration.css';
import banner from '../../img/banner.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import MoodIcon from '@material-ui/icons/Mood';
import { Link, Redirect } from 'react-router-dom';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { registration } from '../../actions/auth';
import { connect } from 'react-redux';

const Registration = ({ setAlert, registration, isAuthenticated }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    registration(data.firstName, data.lastName, data.email, data.password);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    window.scrollTo(0, 0);
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="registration">
      <div className="row">
        <div className="col-md-6">
          <div className="img-container">
            <img className="leftImage" src={banner} alt="" />
          </div>
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
              Join our community!
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
                  <label htmlFor="first-name">
                    <p>First Name</p>
                    <p>
                      {firstName.length !== 0 ? (
                        firstName.length > 0 && firstName.length <= 2 ? (
                          <span className="bad">
                            {' '}
                            Please enter your first name with 3 characters{' '}
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
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="registration__input"
                    id="first-name"
                    ref={register({ required: true, minLength: 3 })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">
                    <p>Last Name</p>
                    <p>
                      {lastName.length !== 0 ? (
                        lastName.length <= 2 ? (
                          <span className="bad">
                            {' '}
                            Please enter your last name with 3 characters{' '}
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
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="registration__input"
                    id="last-name"
                    ref={register({ required: true, minLength: 3 })}
                  />
                </div>
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
                    ref={register({ required: true, minLength: 6 })}
                  />
                </div>

                <div className="registration__submit--button--container">
                  <span>
                    Already Have an account? <Link to="/login">Login</Link>
                  </span>

                  <button className="btn submit--button">
                    Join our community
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Registration.prototype = {
  registration: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registration })(Registration);
