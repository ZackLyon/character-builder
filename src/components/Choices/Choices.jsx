import React from 'react';

export default function Choices({ head, setHead }) {
  const heads = ['angry', 'cracked', 'crazy', 'happy', 'neutral'];
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
    </div>
  );
}
