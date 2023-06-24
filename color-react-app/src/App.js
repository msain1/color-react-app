import React, { useState } from 'react';
import Select from './select-component';
import Square from './square-component';

const App = () => {
  const colors = ['Red', 'Green', 'Blue', 'Yellow'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <Select options={colors} onSelect={handleColorChange} />
      <Square color={selectedColor} />
    </div>
  );
};

export default App;
