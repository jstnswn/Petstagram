import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import picture from '../../assets/login-pic.png'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  if (email !== '' && password !== '') {
    const button = document.querySelector('#login-btn')
    button.style.backgroundColor = '#0095f6'
  }

  return (
    <div id='login-form-page'>
      <div className='right-col'>
        <div className='right'>
          <div className='login-form-container'>
            <div id='login-form-title'>Petstagram</div>
            <form onSubmit={onLogin}>
              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
              <div>
                <input
                  className='login-form-field'
                  name='email'
                  type='text'
                  placeholder='Email or username'
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div>
                <input
                  className='login-form-field'
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={updatePassword}
                />
                <button id='login-btn' type='submit'>Log In</button>
              </div>
            </form>
          </div>
          <div className='login-form-container' id='have-account'>Don't have an account?<a href='' id='login-link'>Sign up</a></div>
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
