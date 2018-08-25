import React, { Component } from 'react';

import '../scss/_top.scss';

class Top extends Component {
  render() {
    return (
      <nav>
        <div className='top-left col'>
          <a className='logo' href='#'>
            <img src='src/img/logo.png' alt='logo' />
          </a>
          <div className='stat'>
            <a href='#'><img src='src/img/stat.png' alt='logo' /></a>
          </div>
        </div>
        <ul className='col list'>
          <li className='item'>
            <a className='link active' href='#'>Предметы</a>
          </li>
          <li className='item'>
            <a className='link' href='#'>Места</a>
          </li>
          <li className='item'>
            <a className='link' href='#'>Люди</a>
          </li>
        </ul>
        <a className='user col' href='#'>
          <div className='user-name'>Людмила Андропова</div>
          <img className='avatar' src='src/img/ava.png' alt='logo' />
          <img src='src/img/arrow.png' alt='logo' />
        </a>
      </nav>
    )
  }
}

export default Top

