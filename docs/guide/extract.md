# Extracting Component

Once you have done styling yor component, and you want to move the style to the StyleSheet object for better clarity, you can use apply function for this.

## Apply function
For example, you have this tag styled component

```jsx
<Text className="text-indigo-700 mb-2 bg-indigo-100 rounded-full px-4 py-1 font-bold self-start">Blog</Text>
```

If we keep using this style, and maybe in the future you will add more property to the Compoent, it'll be hard to read. So we will move the style to the StyleSheets object.

```jsx
import { apply } from 'rn-utility-style'

...

<Text style={styles.tag}>Blog</Text>

...

const styles = StyleSheet.create({
  tag: apply( "text-indigo-700 mb-2 bg-indigo-100 rounded-full px-4 py-1 font-bold self-start" )
})
```

## Combining style

If you want to add some style while using apply function you can write your style like below:

```js
const styles = StyleSheet.create({
  tag: {
    ...apply( "text-indigo-700 mb-2 bg-indigo-100 rounded-full px-4 py-1 font-bold self-start" ),
    fontFamily: 'dancing-script',
    fontSize: 48
  }
})
```