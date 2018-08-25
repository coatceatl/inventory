import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Top = () => <h2>Top</h2>
const Top2 = () => <h2>Top2</h2>
const Menu = () => <h2>Menu</h2>

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

