import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Top from './Top.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' component={Top} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

