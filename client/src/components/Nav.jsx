import React, {lazy, useEffect, useState} from 'react';

import st from 'ryscott-st';
import {helpers} from 'util';

import Util from './Util.jsx';

const Nav = function({user}) {
  return (
    <div className='nav h'>
      <div className='title h'>
        <h3 className='navButton' onClick={()=>{}}>title</h3>
      </div>
      <div className='h'>
        <h4 className='navButton grow' onClick={()=>{}}>button</h4>
      </div>
      <Util user={user}/>
    </div>
  );
};

export default Nav;

