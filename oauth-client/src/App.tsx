import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import AppMenu from './AppMenu';

function App() {
  return (
    <div>
      <AppMenu />
      <div className="App">
        <header className="App-header">
          <Button variant="contained">Signin here</Button>
        </header>
      </div>
    </div>
    
  );
}

export default App;
