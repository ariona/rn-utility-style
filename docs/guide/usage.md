# Usage

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

## Custom Component
If you have some component and need to be supported by RN Utility style, you can build it first.

```jsx
import { SafeAreaView as SaveView } from 'react-native'
import { buildComponent } from 'rn-utility-style'

const SafeAreaView = buildComponent( SaveView )

<SafeAreaView className="flex-1 bg-gray-100">
...
</SafeAreaView>
```

On the example above, we import `SafeAreaView` and rename it to `SaveView`. Then we create a HOC using `buildComponent` function and store it in `SafeAreaView` variable.

Now you can use the SafeAreaView component as usual but with the `rn-utility-style` support

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