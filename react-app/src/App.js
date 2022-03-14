import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ProfilePage from './components/Profile';
import Footer from './components/Footer'
import { getFeedPosts } from './store/dashboard';


function App() {
  const [loaded, setLoaded] = useState(false);
  // const [storeLoaded, setStoreLoaded] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(({ session }) => session.user);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      // setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    if (!user) setLoaded(false);
    (async() => {
      if (user?.username) {
        await dispatch(getFeedPosts())
        setLoaded(true);
      }
    })()
  }, [user, dispatch])


  return (
    <BrowserRouter>
      {user && <NavBar />}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/' exact={true} >
          {user && loaded && <Dashboard />}
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
