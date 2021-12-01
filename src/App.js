import { useState } from 'react';
import Choices from './components/Choices/Choices';
import Character from './components/Character/Character';
import Content from './components/Content/Content';
import './App.css';

function App() {
  const [head, setHead] = useState('angry');
  const [middle, setMiddle] = useState('blue');
  const [leg, setLeg] = useState('dog');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [legCount, setLegCount] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [catchPhrases, setCatchPhrases] = useState([]);

  const handleClick = () => {
    setCatchPhrases((prev) => [...prev, currentPhrase]);
  };

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
          setHeadCount,
          setMiddleCount,
          setLegCount,
          currentPhrase,
          setCurrentPhrase,
          handleClick,
        }}
      />
      <Character {...{ head, middle, leg }} />
      <Content {...{ catchPhrases, headCount, middleCount, legCount }} />
    </div>
  );
}

export default App;
