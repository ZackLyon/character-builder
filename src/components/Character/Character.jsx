import React from 'react';
import './Character.css';

export default function Character({ head, middle, leg }) {
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
      <div
        className='legs'
        style={{ backgroundImage: `url(${leg}-pants.png)` }}
      ></div>
    </div>
  );
}
