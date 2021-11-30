import React from 'react';
import './Character.css';

export default function Character({ head, middle }) {
  return (
    <div className='character'>
      <div
        className='head'
        style={{ backgroundImage: `url(${head}-head.png)` }}
      ></div>
      <div
        className='middle'
        style={{ backgroundImage: `url(${middle}-middle.png)` }}
      ></div>
    </div>
  );
}
