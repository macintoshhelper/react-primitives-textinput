import React from 'react';
import { Text } from 'react-primitives';

const Input = ({ value, placeholder, ...props }) => (
  <Text {...props}>
    {placeholder || value}
  </Text>
);

Input.defaultProps = {
  style: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
};

export default Input;
