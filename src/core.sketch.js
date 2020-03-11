import React from 'react';
import { Text } from 'react-sketchapp';

const Input = ({ value, placeholder, style, ...props }) => {
  const { fontSize, lineHeight, color, ...viewStyles } = style;
  return (
    <View style={viewStyles}>
      <Text style={{ fontSize, lineHeight, color }} {...props}>
        {placeholder || value}
      </Text>
    </View>
  );
};

Input.defaultProps = {
  style: {
    padding: 8,
    borderColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 16,
    lineHeight: 16,
  },
};

export default Input;
