import React from 'react';
import './Choices.css';

export default function Choices({
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
}) {
  const heads = ['angry', 'cracked', 'crazy', 'happy', 'neutral'];
  const middles = ['blue', 'fancy', 'pink', 'red'];
  const legs = ['blue', 'dog', 'leg', 'white'];

  const onHeadChange = (e) => {
    setHead(e.target.value);
    setHeadCount((prev) => prev + 1);
  };

  const onMiddleChange = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prev) => prev + 1);
  };

  const onLegChange = (e) => {
    setLeg(e.target.value);
    setLegCount((prev) => prev + 1);
  };

  return (
    <div className='choices'>
      <label>
        Heads:
        <select value={head} onChange={(e) => onHeadChange(e)}>
          {heads.map((headOption) => (
            <option key={headOption}>{headOption}</option>
          ))}
        </select>
      </label>

      <label>
        Middles:
        <select value={middle} onChange={(e) => onMiddleChange(e)}>
          {middles.map((middleOption) => (
            <option key={middleOption}>{middleOption}</option>
          ))}
        </select>
      </label>

      <label>
        Legs:
        <select value={leg} onChange={(e) => onLegChange(e)}>
          {legs.map((legsOption) => (
            <option key={legsOption}>{legsOption}</option>
          ))}
        </select>
      </label>

      <label>
        Catch Phrase:
        <input
          type='text'
          value={currentPhrase}
          onChange={(e) => setCurrentPhrase(e.target.value)}
        />
        <button type='button' onClick={handleClick}>
          Submit
        </button>
      </label>
    </div>
  );
}
