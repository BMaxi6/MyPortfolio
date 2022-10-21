import React from 'react';
import './App.css';
import { GridFor } from './components/GridFor/GridFor';
import { Header } from './components/Header/Header';
import { HorizontalBar } from './components/horizontal-bar/HorizontalBar';

function App() {

  return (
    <div>
      <Header></Header>
      <GridFor></GridFor>
    </div>
  );
}

export default App;
