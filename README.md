# react-primitives-textinput

Cross platform `<TextInput>` component for React.

## Getting Started

### Setting up Resolver

You need to setup a resolver to use the correct file for your platform.

You can do this with a custom Webpack or Rollup config.

e.g. for web:

`webpack.config.js`

```js
const baseConfig = { ... };

module.exports = {
  resolve = {
    ...baseConfig,
    extensions: [
      '.web.js',
      '.web.jsx'
      ...baseConfig.resolve.extensions,
    ]
  };
};
```

### Building a Shared `TextInput` Component:

```jsx
import TextInputPrimitive from 'react-primitives-textinput';

const TextInput = (props) => (
  <TextInputPrimitive {...props} />
);
TextInput.defaultProps = {
  style: {
    borderWidth: 1,
    borderColor: 'gray',
  }
};

export default TextInput;
```
