import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Top from './Top.jsx';
import Top2 from './Top2.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' component={Top2} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

