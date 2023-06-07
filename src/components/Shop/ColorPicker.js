import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  const handleChangeColor = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div>
      <CirclePicker
        color={color}
        onChange={handleChangeColor}
        colors={['#FF0000', '#00FF00', '#0000FF', '#FFFF00']} 
        circleSize={38}
        circleSpacing={20}
      />
      <div style={{ marginTop: '10px' }}>
        {/* Selected Color: <span style={{ color }}>{color}</span> */}
      </div>
    </div>
  );
};

export default ColorPicker;
