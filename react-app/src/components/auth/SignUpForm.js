import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
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

  if (user) {
    return <Redirect to='/' />;
  }

  if (username !== '' && fullName !== '' && email !== '' && password !== '') {
    const button = document.querySelector('#signup-btn')
    button.style.backgroundColor = '#0095f6'
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
          <div>
            <input
              className='form-field'
              placeholder='Email'
              type='text'
              name='email'
              onChange={updateEmail}
              required='required'
              value={email}
            ></input>
          </div>
          <div>
            <input
              className='form-field'
              placeholder='Full Name'
              type='text'
              name='fullName'
              onChange={updateFullName}
              required='required'
              value={fullName}
            ></input>
          </div>
          <div>
            <input
              className='form-field'
              placeholder='Username'
              type='text'
              name='username'
              onChange={updateUsername}
              required='required'
              value={username}
            ></input>
          </div>
          <div>
            <input
              className='form-field'
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
      <div className='form-container' id='have-account'>Have an account?<a href='/login' id='login-link'>Log in</a></div>
    </div>
  );
};

export default SignUpForm;
