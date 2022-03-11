import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import { login } from '../../store/session';
import picture from '../../assets/login-pic.png'
import petstagram from '../../assets/petstagram.png'
import './LoginForm.css'


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    if (emailOrUsername.includes('@')) {
      let email = emailOrUsername
      let username = ''
      const data = await dispatch(login(email, username, password));
      if (data) {
        setErrors(data);
      }
    } else {
      let email = ''
      let username = emailOrUsername
      const data = await dispatch(login(email, username, password))
      if (data) {
        setErrors(data);
      }
    }
  };

  const demoLogin = (e) => {
    e.preventDefault();
    let email = 'Mango@Voisin.com'
    let username = 'Mango'
    let password = 'password'
    dispatch(login(email, username, password))
  }

  const updateEmailOrUsername = (e) => {
    setEmailOrUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const emailField = document.querySelector('.email')
    const emailPlaceholder = document.querySelector('#email-placeholder')

    const passwordField = document.querySelector('.password')
    const passwordPlaceholder = document.querySelector('#password-placeholder')

    if (emailOrUsername === '') {
      emailPlaceholder.style.opacity = 0
      emailField.style.padding = '0px 10px'
    } else {
      emailPlaceholder.style.opacity = 1
      emailField.style.padding = '14px 0 2px 8px'
    }

    if (password === '') {
      passwordPlaceholder.style.opacity = 0
      passwordField.style.padding = '0px 10px'
    } else {
      passwordPlaceholder.style.opacity = 1
      passwordField.style.padding = '14px 0 2px 8px'
    }
  }, [emailOrUsername, password])

  if (user) {
    return <Redirect to='/' />;
  }
  const button = document.querySelector('#login-btn')
  if (button) {
    if (emailOrUsername !== '' && password !== '') {
      button.style.backgroundColor = '#0095f6'
    } else {
      button.style.backgroundColor = 'rgb(160,218,249)'
    }
  }

  return (
    <div id='login-form-page'>
      <div className='right-col'>
        <div className='right'>
          <div className='login-form-container'>
            <img className='title' src={petstagram} alt='Petstagram Title'></img>
            <form onSubmit={onLogin}>
              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
              <div className='field-container'>
                <span id='email-placeholder'>Username or Email</span>
                <input
                  className='login-form-field email'
                  name='emailOrUsername'
                  type='text'
                  placeholder='Username or Email'
                  value={emailOrUsername}
                  required='required'
                  onChange={updateEmailOrUsername}
                />
              </div>
              <div className='field-container'>
                <span id='password-placeholder'>Password</span>
                <input
                  className='login-form-field password'
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  required='required'
                  onChange={updatePassword}
                />
                <button id='login-btn' type='submit'>Log In</button>
              </div>
            </form>
            <button id='demo-login' onClick={demoLogin}>Demo User</button>
          </div>
          <div className='login-form-container' id='have-account'>Don't have an account?<NavLink to='/sign-up' id='login-link'>Sign up</NavLink></div>
        </div>
      </div>
      <div className='left-col'>
        <div className='left'>
          <img id='img' src={picture} alt='Petstagram Phone'></img>
        </div>
      </div>
    </div>

  );
};

export default LoginForm;
