import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import picture from '../../assets/login-pic.png'
import petstagram from '../../assets/petstagram.png'


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

  if (user) {
    return <Redirect to='/' />;
  }

  if (emailOrUsername !== '' && password !== '') {
    const button = document.querySelector('#login-btn')
    button.style.backgroundColor = '#0095f6'
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
              <div>
                <input
                  className='login-form-field'
                  name='emailOrUsername'
                  type='text'
                  placeholder='Email or username'
                  value={emailOrUsername}
                  required='required'
                  onChange={updateEmailOrUsername}
                />
              </div>
              <div>
                <input
                  className='login-form-field'
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
