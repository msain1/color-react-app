import React from 'react';

const Select = ({ options, onSelect }) => {
  const handleChange = (e) => {
    const selectedColor = e.target.value;
    onSelect(selectedColor);
  };

  return (
    <select onChange={handleChange}>
      {options.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
};

export default Select;