import React from 'react';
import Button from './Button';

export default ({ onNumberClick, onNumberEquals }) => {
  return [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, '='],
  ].map((rowEl, idx) => {
    return (
      <div className="columns is-mobile" key={`Row${idx}`}>
        {rowEl.map((colEl, colIdx) => {
          return (
            <div className="column" key={`Col${colIdx}`}>
              {renderButtons(colEl, idx)}{' '}
            </div>
          );
        })}
      </div>
    );
  });

  function renderButtons(el, idx) {
    return el === '=' ? (
      <Button
        onNumberClick={() => {
          onNumberEquals();
        }}
        number={el}
        key={idx}
      />
    ) : (
      <Button
        onNumberClick={() => {
          onNumberClick(el);
        }}
        number={el}
        key={idx}
      />
    );
  }
};
