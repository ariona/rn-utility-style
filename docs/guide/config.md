# Configuration

If you need to configure some of the default style, you can pass your configuration object to config property in your UtilityProvider.

```jsx
import { UtilityProvider } from 'rn-utility-style'

const config = {
  // your configuration
}

<UtilityProvider config={config}>
  // your root app component
  <App />
</UtilityProvider>
```

For the list of configuration, you can check it out here [config.js](https://github.com/ariona/rn-utility-style/blob/master/config.js)

## Overriding

Let's say you are not happy with the fontSize generated from the utility. You can override it withing your config.

```js
const config = {
  baseFontSize: 14,
  fontSize: {
    'xs'   : 0.75,
    'sm'   : 0.875,
    'base' : 1,
    'lg'   : 1.125,
    'xl'   : 1.25,
    '2xl'  : 1.5,
    '3xl'  : 1.875,
    '4xl'  : 2.25,
    '5xl'  : 3,
    '6xl'  : 4,
  }
}
```

> Note that you need to copy the full value of the property and update which value you wanted.

## Best Practice

It's a best practice to create your configuration in it's own file, so we can import it anywhere in your app. this is related to our next topic.

**config.js**
```jsx
export default {
  baseFontSize: 14,
  ...
}
```

**App.js**
```jsx
import Config from './config.js'

<UtilityProvider config={Config}>
  ...
</UtilityProvider>
```