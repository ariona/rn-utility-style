# StyleSheet

If you do not like wrapping your app inside rn-utility-style provider and using core component imported from it, you can still use `rn-utility-style` using `apply` function.

First let's import it in to our component file:

```js
import { StyleSheet } from 'react-native'
import { apply } from 'rn-utility-style'
```

Now you can use the function in your StyleSheet like so:

```jsx
export default function Home() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Hello, i am using RN Utility Style</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card  : apply( "bg-white p-8 rounded-lg shadow" ),
  title : {
    ...apply( "text-gray-300 text-center" ),
    fontFamily: 'Dancing Script',
    fontSize: 17
  }
})
```

Notice this lines:
```js
title : {
  ...apply( "text-gray-300 text-center" ),
  fontFamily: 'Dancing Script',
  fontSize: 17
}
```
If you need to add your own style, first you need to spread the apply as it return an objects.

## Custom Config
Since the StyleSheet is placed outside the class/function component or you are not using provider or core component exported by rn-utility-style, we don't have access to your configuration file. 

So if you have your own configuration file, you need to pass it to the second parameter of the `apply` function.

```js
import Config from './config.js'

const styles = StyleSheet.create({
  card  : apply( "bg-white p-8 rounded-lg shadow", Config ),
})
```

That is why we recommend you to create a file for your config. But if you are happy with the default you can skip passing the Config param.