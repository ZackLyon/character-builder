import React from 'react';
import './Character.css';

export default function Character({
  head,
  middle,
  leg,
  headCount,
  middleCount,
  legCount,
}) {
  return (
    <div className='character'>
      <div className='counts'>
        <div>The head has been changed: {headCount} times.</div>
        <div>The middle has been changed: {middleCount} times.</div>
        <div>The legs have been changed: {legCount} times.</div>
      </div>
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
