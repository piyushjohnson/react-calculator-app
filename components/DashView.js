import React from 'react';

export default ({ number, lastNumber, operation }) => {
  return (
    <div
      className="box"
      style={{ borderRadius: '0px', minHeight: '60px', maxHeight: '60px' }}
    >
      <div>
        <span style={{ color: 'grey' }}>{lastNumber}</span>
        <span style={{ color: 'red' }}>{operation}</span>
        <span>{number}</span>
      </div>
    </div>
  );
};
