import { useState } from 'react';
import Choices from './components/Choices/Choices';
import Character from './components/Character/Character';
import './App.css';

function App() {
  const [head, setHead] = useState('angry');
  const [middle, setMiddle] = useState('blue');
  const [leg, setLeg] = useState('dog');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [legCount, setLegCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Character Builder</h1>
      </header>
      <Choices
        {...{
          head,
          setHead,
          middle,
          setMiddle,
          leg,
          setLeg,
          headCount,
          setHeadCount,
          middleCount,
          setMiddleCount,
          legCount,
          setLegCount,
        }}
      />
      <Character {...{ head, middle, leg, headCount, middleCount, legCount }} />
    </div>
  );
}

export default App;
