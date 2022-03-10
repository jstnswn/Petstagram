import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import SplashNav from './components/SplashNav';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ProfilePage from './components/Profile';
import Footer from './components/Footer'
import { getFeedPosts } from './store/dashboard';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(({ session }) => session.user);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getFeedPosts())
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    if (!user) return;

    // dispatch(getNotifications())

  }, [user])

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {user && <NavBar />}
      {!user && <SplashNav />}

      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path='/:username' exact={true} >
          <ProfilePage />
        </ProtectedRoute>
      </Switch>
      {!user && <Footer />}
    </BrowserRouter>
  );
}

export default App;
