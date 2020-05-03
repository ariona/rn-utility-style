# Usage

## Adding Utility Provider

First we need to wrap the root of our app in utility provider. The Utility Provider is basicly a React Context Provider.

```jsx
import { UtilityProvider } from 'rn-utility-style'

export default function RootComponent ( props ) {
  retun (
    <UtilityProvider>
      /* your root app component */ 
      <App />
    </UtilityProvider>
  )
}
```

## Core Component

Instead of importing Core component from react-native library, you need to import it from `rn-utility-style`.

```jsx
import { View, Text, Image } from 'rn-utility-style'
```

> Here is the components we have provided: View, Text, Image, ImageBackground, TouchableOpacity, TouchableHighlight, ScrollView, FlatList, SectionList. You can also build the component using our buildComponent function.


To use the utility style like tailwind you just need to pass your utility classes into `className` property.

```jsx
<View className="bg-white p-8 rounded-lg shadow">
  <Text className="text-gray-300 text-center">Hello, i am using RN Utility Style</Text>
</View>
```

## Advantage

By importing the component from rn-utility-style, Now we can use our lovely className property so we can take advantage some code completion like emmet to speedup writing UI component.

We can just write the above example as below and then expand the abreviation.
```
View.bg-white.p-8.rounded-lg.shadow>Text.text-gray-300.text-center{Hello, i am using RN Utility Syle}
```

## Style Property

You can still use the style property in your component, and it can override the style from the utility class.

```jsx
<View className="bg-white" style={{backgroundColor: 'red'}}></View>
```

The above example will have have background Color red overriding the bg-white class utility. This is helpful to add some style which isn't provided by the library.