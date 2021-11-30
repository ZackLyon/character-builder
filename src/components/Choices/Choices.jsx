import React from 'react';

export default function Choices({ head, setHead, middle, setMiddle }) {
  const heads = ['angry', 'cracked', 'crazy', 'happy', 'neutral'];
  const middles = ['blue', 'fancy', 'pink', 'red'];

  return (
    <div>
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
    </div>
  );
}
