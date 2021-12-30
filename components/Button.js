import React from 'react';

export default ({ onNumberClick, number }) => {
  return (
    <button
      className="button is-info is-large is-fullwidth"
      onClick={() => onNumberClick()}
    >
      {' '}
      {number}
    </button>
  );
};
