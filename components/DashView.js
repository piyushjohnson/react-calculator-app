import React from 'react';

export default ({ number, lastNumber, operation, compute }) => {
  return (
    <div
      className="box"
      style={{ borderRadius: '0px', minHeight: '60px', maxHeight: '60px' }}
    >
      <div>
        {/* <span style={{ color: 'grey' }}>{lastNumber}</span>
        <span style={{ color: 'red' }}>{operation}</span>
        <span>{number}</span> */}

        <span>{compute}</span>
      </div>
    </div>
  );
};
