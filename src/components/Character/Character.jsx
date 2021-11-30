import React from 'react';
import './Character.css';

export default function Character({ head }) {
  return (
    <div>
      <div
        className='head'
        style={{ backgroundImage: `url(${head}-head.png)` }}
      ></div>
    </div>
  );
}
