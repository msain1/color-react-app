import React from 'react';

const Square = ({ color }) => {
  const squareStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: color,
    margin: "0 10rem",
  };

  return <div style={squareStyle}></div>;
};

export default Square;