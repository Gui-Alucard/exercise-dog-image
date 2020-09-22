import React from 'react';
import DogApi from './components/DogApi';
import ListDogs from './components/ListDogs';
import './App.css';

function App() {
  return (
    <div className="App">
      <DogApi />
      <ListDogs />
    </div>
  );
}

export default App;
