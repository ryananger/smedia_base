import React, {useEffect, useState} from 'react';

import 'styles';
import st from 'ryscott-st';
// import pusher from './pusher.js';
import {ax, helpers} from 'util';

import Nav from './Nav.jsx';
import Home from './feeds/Home.jsx';
import Login from './Login.jsx';
import Alert from './Alert.jsx';
import Pusher from './Pusher.jsx';

const cookie = helpers.cookieParse();

const App = function() {
  const [view, setView] = st.newState('view', useState('home'));
  const [user, setUser] = st.newState('user', useState(null));

  const views = {
    home:  <Home/>,
    login: <Login/>
  };

  var userFromCookie = function() {
    if (!user && cookie.user) {
      ax.getUser(cookie.user);
    }
  };

  var handleUser = function() {

  };

  useEffect(userFromCookie, []);
  useEffect(handleUser, [user]);

  return (
    <div className='app v'>
      <Alert />
      {/* <Pusher /> */}
      <Nav user={user}/>
      <div className='main h'>
        <div className='feed v'>
          {views[view] || view}
        </div>
      </div>
    </div>
  );
};

export default App;

