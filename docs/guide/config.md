# Configuration

If you need to configure some of the default style, you can pass your configuration object to RNUtilityStyle.loadConfig method.

You can place the configuration in your root file, something like `index.js` or `app.js`

```jsx
import RNUtilityStyle from 'rn-utility-style'

const config = {
  baseFontSize: 16,
  fontFamily: {
    primary: {
      regular : "inter-regular",
      bold    : "inter-bold"
    }
  }
}

RNUtilityStyle.loadConfig( config )
```

For the full list of configuration, you can check it out here [config.js](https://github.com/ariona/rn-utility-style/blob/master/config.js)

## Overriding

Let's say you are not happy with the fontSize generated from the utility. You can override it within your config.

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

> Note that you need to copy the full value of the property and update which value you want to update.