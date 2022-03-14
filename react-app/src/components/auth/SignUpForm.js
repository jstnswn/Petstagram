import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import petstagram from '../../assets/petstagram.png'
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
      const data = await dispatch(signUp(username, email, password, fullName));
      if (data) {
        setErrors(data)
        console.log(data)
      }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFullName = (e) => {
    setFullName(e.target.value);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const emailField = document.querySelector('.email')
    const emailPlaceholder = document.querySelector('.email-placeholder')
    const nameField = document.querySelector('.name')
    const namePlaceholder = document.querySelector('.name-placeholder')
    const usernameField = document.querySelector('.username')
    const usernamePlaceholder = document.querySelector('.username-placeholder')
    const passwordField = document.querySelector('.password')
    const passwordPlaceholder = document.querySelector('.password-placeholder')

    if (email === '') {
      emailPlaceholder.style.opacity = 0
      emailField.style.padding = '0px 10px'
    } else {
      emailPlaceholder.style.opacity = 1
      emailField.style.padding = '14px 0 2px 8px'
    }

    if (fullName === '') {
      namePlaceholder.style.opacity = 0
      nameField.style.padding = '0px 10px'
    } else {
      namePlaceholder.style.opacity = 1
      nameField.style.padding = '14px 0 2px 8px'
    }

    if (username === '') {
      usernamePlaceholder.style.opacity = 0
      usernameField.style.padding = '0px 10px'
    } else {
      usernamePlaceholder.style.opacity = 1
      usernameField.style.padding = '14px 0 2px 8px'
    }

    if (password === '') {
      passwordPlaceholder.style.opacity = 0
      passwordField.style.padding = '0px 10px'
    } else {
      passwordPlaceholder.style.opacity = 1
      passwordField.style.padding = '14px 0 2px 8px'
    }
  }, [email, fullName, username, password])

  if (user) {
    return <Redirect to='/' />;
  }
  const button = document.querySelector('#signup-btn')

  if (button) {
    if (username !== '' && fullName !== '' && email !== '' && password !== '') {
      button.style.backgroundColor = '#0095f6'
    } else {
      button.style.backgroundColor = 'rgb(160,218,249)'
    }

  }
  const formatError = error => {
    const startIndex = error.indexOf(':') + 1
    return error.slice(startIndex)
  }

  return (
    <div id='signup-form-page'>
      <div className='form-container'>
        <img className='title' src={petstagram} alt='Petstagram Title'></img>
        <div className='signup-form-heading'>Sign up to see photos and videos from your friends.</div>
        <form onSubmit={onSignUp}>
          <div className='error-handling'>
            {errors.map((error, ind) => (
              <div key={ind}>{formatError(error)}</div>
            ))}
          </div>
          <div className='field-container'>
            <span className='email-placeholder'>Email</span>
            <input
              className='form-field email'
              placeholder='Email'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              required
            ></input>
          </div>
          <div className='field-container'>
            <span className='name-placeholder'>Full Name</span>
            <input
              className='form-field name'
              placeholder='Full Name'
              type='text'
              name='fullName'
              onChange={updateFullName}
              value={fullName}
              required
            ></input>
          </div>
          <div className='field-container'>
            <span className='username-placeholder'>Username</span>
            <input
              className='form-field username'
              placeholder='Username'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              required
            ></input>
          </div>
          <div className='field-container'>
            <span className='password-placeholder'>Password</span>
            <input
              className='form-field password'
              placeholder='Password'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              required
            ></input>
          </div>

          {username && fullName && email && password ? (
              <button id='signup-clickable'>Sign Up</button>) : (
                <button id='signup-unclickable' disabled>Sign Up</button>
              )}
        </form>
        <div className='signup-form-heading' id='signup-form-footing'>By signing up, you agree to view many cute photos of pets.</div>
      </div>
      <div className='form-container' id='have-account'>Have an account?<NavLink to='/login' id='login-link'>Log in</NavLink></div>
    </div>
  );
};

export default SignUpForm;
