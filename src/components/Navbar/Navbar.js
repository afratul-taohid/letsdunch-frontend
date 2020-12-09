import React, { Fragment, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import grayLogo from '../../img/GrayWebLogo.png';
import colorLogo from '../../img/ColorWebLogo.png';
import './Navbar.css';
import PublicIcon from '@material-ui/icons/Public';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import PopOverMyCircle from '../Popup/PopOverMyCircle';
import PopOverMyDunch from '../Popup/PopOverMyDunch';
import BookEventPopup from '../Popup/BookEventPopup/BookEventPopup';
import { connect, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NavigationBar = ({ logout }) => {
  const [openModel, setOpenModel] = useState(false);

  const addingClass = () => {
    document.getElementById('popup').classList.toggle('popup');
  };

  const handleBookEvent = () => {
    document.getElementById('popup').classList.toggle('popup');

    if (openModel) {
      setOpenModel(false);
    } else {
      setOpenModel(true);
    }
  };

  useEffect(() => {
    if (!openModel) {
      document.getElementById('popup').classList.remove('popup');
    }
  }, [openModel]);

  const auth = useSelector((state) => state.auth);

  const { isAuthenticated } = auth;

  const authLinks = (
    <>
      <span className="nav-link" onClick={addingClass} id="Popover1">
        <PublicIcon /> My Circle
      </span>
      <span className="nav-link" onClick={addingClass} id="Popover2">
        <EventNoteIcon /> My Dunch
      </span>
      <span onClick={handleBookEvent} className="nav-link">
        <AddCircleRoundedIcon /> Book a event
      </span>
      <Link className="nav-link" to="#">
        <NotificationsRoundedIcon />
      </Link>
      <Link className="nav-link" to="/profile">
        Profile
      </Link>
      <Link className="nav-link" to="/pay">
        Pay
      </Link>
      <span onClick={logout} className="nav-link" href="#!">
        Logout
      </span>
    </>
  );

  const guestLinks = (
    <>
      <Link className="nav-link" to="/private-events">
        Private Events
      </Link>
      <Link className="nav-link" to="/login">
        Login
      </Link>
      <Link className="nav-link signup" to="/registration">
        Sign up
      </Link>

      <Link className="nav-link" to="/verify-email">
        Verify Email
      </Link>
    </>
  );

  const [grayNav, setGrayNav] = useState(true);

  const navHeight = () => {
    if (window.scrollY >= 100) {
      setGrayNav(false);
    } else {
      setGrayNav(true);
    }
  };

  window.addEventListener('scroll', navHeight);

  return (
    <div>
      <Navbar
        id="nav"
        className={`${grayNav ? 'grayNavbar' : 'colorNavbar'} `}
        expand="lg"
      >
        <Link to="/">
          <img className="logo" src={grayNav ? grayLogo : colorLogo} alt="" />
        </Link>
        <Navbar.Toggle
          className="toggle__icon"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {
              <Fragment>
                {isAuthenticated === true ? authLinks : guestLinks}
              </Fragment>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div id="popup">
        {isAuthenticated === true && (
          <Fragment>
            <PopOverMyCircle id="Popover1" />
            <PopOverMyDunch id="Popover2" />
            <BookEventPopup openModel={openModel} setOpenModel={setOpenModel} />
          </Fragment>
        )}
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(NavigationBar);
