import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import RHeader from '../src/components/header/index';
import MenuNav from './components/menu-nav/index';
import RRouter from '../src/router/index';

function App() {
  return (
    <div className="App">
      <RHeader />
      <HashRouter>
        <MenuNav />
        <div className="content">
          <RRouter />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
