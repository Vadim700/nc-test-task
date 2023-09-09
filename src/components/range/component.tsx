import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
   return `${value}°C`;
}

type RangeSliderProps = {
   onchange: any;
};

export const RangeSlider: React.FC<RangeSliderProps> = ({ onchange }) => {
   const [value, setValue] = React.useState<number[]>([24, 48]);

   const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
      onchange(value);
   };

   return (
      <Box sx={{ width: '100%' }}>
         <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            marks
            min={18}
            max={65}
         />
      </Box>
   );
};
