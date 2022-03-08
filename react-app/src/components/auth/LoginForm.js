import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import picture from '../../assets/login-pic.png'
import petstagram from '../../assets/petstagram.png'


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(login('Mango@Voisin.com', 'password'))
  }

  const updateFullName = (e) => {
    setFullName(e.target.value)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  
  useEffect(() => {
    const emailField = document.querySelector('.email')
    const emailPlaceholder = document.querySelector('#email-placeholder')

    const passwordField = document.querySelector('.password')
    const passwordPlaceholder = document.querySelector('#password-placeholder')

    if (email === '') {
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
  }, [email, password])

  if (user) {
    return <Redirect to='/' />;
  }
  const button = document.querySelector('#login-btn')
  if (button) {
    if (email !== '' && password !== '') {
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
            <img className='title' src={petstagram}></img>
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
                  name='email'
                  type='text'
                  placeholder='Username or Email'
                  value={email}
                  required='required'
                  onChange={updateEmail}
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
          <div className='login-form-container' id='have-account'>Don't have an account?<a href='/sign-up' id='login-link'>Sign up</a></div>
        </div>
      </div>
      <div className='left-col'>
        <div className='left'>
          <img id='img' src={picture}></img>
        </div>
      </div>
    </div>

  );
};

export default LoginForm;
