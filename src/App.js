import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import RHeader from '../src/components/header/index';
import MenuNav from './components/menu-nav/index';
import RBread from "./components/bread";
import RRouter from '../src/router/index';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <RHeader />
        <MenuNav />
        <div className="app-content">
          <div className="content">
            <RBread />
            <div className="content-container">
              <RRouter />
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
