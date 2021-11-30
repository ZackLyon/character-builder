import { useState } from 'react';
import Choices from './components/Choices/Choices';
import Character from './components/Character/Character';
import './App.css';

function App() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Character Builder</h1>
      </header>
      <Choices {...{ head, setHead, middle, setMiddle }} />
      <Character {...{ head, middle }} />
    </div>
  );
}

export default App;
