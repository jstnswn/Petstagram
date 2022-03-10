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
  // const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    // if (password === repeatPassword) {
      console.log(fullName)
      const data = await dispatch(signUp(username, email, password, fullName));
      if (data) {
        setErrors(data)
      }
    // }
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

  // const updateRepeatPassword = (e) => {
  //   setRepeatPassword(e.target.value);
  // };

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

  return (
    <div id='signup-form-page'>
      <div className='form-container'>
        <img className='title' src={petstagram}></img>
        <div className='signup-form-heading'>Sign up to see photos and videos from your friends.</div>
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='field-container'>
            <span class='email-placeholder'>Email</span>
            <input
              className='form-field email'
              placeholder='Email'
              type='text'
              name='email'
              onChange={updateEmail}
              required='required'
              value={email}
            ></input>
          </div>
          <div className='field-container'>
            <span class='name-placeholder'>Full Name</span>
            <input
              className='form-field name'
              placeholder='Full Name'
              type='text'
              name='fullName'
              onChange={updateFullName}
              required='required'
              value={fullName}
            ></input>
          </div>
          <div className='field-container'>
            <span class='username-placeholder'>Username</span>
            <input
              className='form-field username'
              placeholder='Username'
              type='text'
              name='username'
              onChange={updateUsername}
              required='required'
              value={username}
            ></input>
          </div>
          <div className='field-container'>
            <span class='password-placeholder'>Password</span>
            <input
              className='form-field password'
              placeholder='Password'
              type='password'
              name='password'
              onChange={updatePassword}
              required='required'
              value={password}
            ></input>
          </div>
          {/* <div>
            <label>Repeat Password</label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div> */}
          <button id='signup-btn' type='submit'>Sign Up</button>
        </form>
        <div className='signup-form-heading' id='signup-form-footing'>By signing up, you agree to view many cute photos of pets.</div>
      </div>
      <div className='form-container' id='have-account'>Have an account?<NavLink to='/login' id='login-link'>Log in</NavLink></div>
    </div>
  );
};

export default SignUpForm;
