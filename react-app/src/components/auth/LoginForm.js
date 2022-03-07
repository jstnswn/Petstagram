import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

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

  const updateFullName = (e) => {
    setFullName(e.target.value)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="signup-form-page">
    <div className='form-container'>
    <form onSubmit={onLogin} className='login-form'>
      <h1 className='form-heading'>Instagram</h1>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='email'></label>
        <input
          name='email'
          type='text'
          placeholder='Email or username'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor='password'></label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div>
        <button type='submit' className='login-button'>Log In</button>
    </form>
      <div>
    <div className='sign-up-container'>
        Don't have an account?
        <a href='' className='sign-up-link'>Sign up</a>
    </div>
      </div>
        {/* TODO Picture */}
      </div>
      </div>
  );
};

export default LoginForm;
