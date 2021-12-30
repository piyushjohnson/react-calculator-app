import React, { Component } from 'react';

function ActionButtons({
  onNumberDelete,
  onNumberClear,
  onNumberAdd,
  onNumberMinus,
  onNumberMultiply,
  onNumberDivide,
  onNumberEquals,
}) {
  return [
    [
      [onNumberDelete, <span>&#10060;</span>],
      [onNumberClear, <span>AC</span>],
      [onNumberAdd, <span className="is-primary">&#10133;</span>],
    ],
    [
      [onNumberMinus, <span>&#10134;</span>],
      [onNumberMultiply, <span>&#128948;</span>],
      [onNumberDivide, <span>&#10135;</span>],
    ],
  ].map((rowEl, idx) => {
    return (
      <div className="columns is-mobile" key={`Row${idx}`}>
        {rowEl.map((el, colIdx) => {
          return (
            <div className="column" key={`Col${colIdx}`}>
              <button
                className="button is-large is-outlined is-fullwidth"
                onClick={el[0]}
              >
                {el[1]}
              </button>
            </div>
          );
        })}
      </div>
    );
  });
}

export default ActionButtons;
