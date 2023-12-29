import React from 'react';
import Select from 'react-select';
//import { colourOptions } from '../data';
import { useState } from 'react';



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export const Sel =() => {
  const [cat, setCat] = useState(true);

  const onChange = ({value} ) => {
      console.log(value);

    };

  return (
    <Select
    
      onChange={onChange}
      options={options}
      placeholder="Number of Guests"
    />
  );
};