import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import RHeader from '../src/components/header/index';
import MenuNav from './components/menu-nav/index';
import RRouter from '../src/router/index';

function App() {
  return (
    <div className="app">
      <RHeader />
      <HashRouter>
        <div className="app-content">
          <MenuNav />
          <div className="content">
            <RRouter />
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
