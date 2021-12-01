import React from 'react';
import './Content.css';

export default function Content({
  catchPhrases,
  headCount,
  middleCount,
  legCount,
}) {
  return (
    <div className='content'>
      <div className='counts'>
        <div>The head has been changed: {headCount} times.</div>
        <div>The middle has been changed: {middleCount} times.</div>
        <div>The legs have been changed: {legCount} times.</div>
      </div>
      Check out my snappy catch phrases:
      {catchPhrases.map((phrase) => (
        <div>"{phrase}"</div>
      ))}
    </div>
  );
}
