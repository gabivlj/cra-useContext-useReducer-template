import React from 'react';
import './App.css';
import GlobalState from './context/GlobalState';
import List from './components/List';

function App() {
  return (
    <GlobalState>
      <List/>
    </GlobalState>
  );
}

export default App;
