import React, { Component } from 'react';

import '../scss/_top.scss';

class Top extends Component {
  render() {
    return (
      <nav>
        <a className='logo' href='#'>
          <img src='src/img/logo.png' alt='logo' />
        </a>
        <ul>
          <li>
            <a href='#'>Предметы</a>
          </li>
          <li>
            <a href='#'>Места</a>
          </li>
          <li>
            <a href='#'>Люди</a>
          </li>
        </ul>
        <div className='user'>
          <div className='user-name'>Людмила Андропова</div>
          <div className='user-avatar'>
            <img src='src/img/ava.png' alt='logo' />
          </div>
        </div>
      </nav>
    )
  }
}

export default Top

