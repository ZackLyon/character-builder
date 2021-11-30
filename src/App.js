import { useState } from 'react';
import Choices from './components/Choices/Choices';
import Character from './components/Character/Character';
import './App.css';

function App() {
  const [head, setHead] = useState('angry');
  const [middle, setMiddle] = useState('blue');
  const [leg, setLeg] = useState('dog');

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Character Builder</h1>
      </header>
      <Choices {...{ head, setHead, middle, setMiddle, leg, setLeg }} />
      <Character {...{ head, middle, leg }} />
    </div>
  );
}

export default App;
