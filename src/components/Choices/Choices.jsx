import React from 'react';
import './Choices.css';

export default function Choices({
  head,
  setHead,
  middle,
  setMiddle,
  leg,
  setLeg,
}) {
  const heads = ['angry', 'cracked', 'crazy', 'happy', 'neutral'];
  const middles = ['blue', 'fancy', 'pink', 'red'];
  const legs = ['blue', 'dog', 'leg', 'white'];

  return (
    <div className='choices'>
      <label>
        Heads:
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          {heads.map((headOption) => (
            <option key={headOption}>{headOption}</option>
          ))}
        </select>
      </label>

      <label>
        Middles:
        <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
          {middles.map((middleOption) => (
            <option key={middleOption}>{middleOption}</option>
          ))}
        </select>
      </label>

      <label>
        Legs:
        <select value={leg} onChange={(e) => setLeg(e.target.value)}>
          {legs.map((legsOption) => (
            <option key={legsOption}>{legsOption}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
