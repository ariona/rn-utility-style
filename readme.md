# RN Utility Style
**RN Utility Style** is utility-first style framework for rapidly building React Native User interface.

<p>
  <a href="https://www.npmjs.com/package/rn-utility-style"><img src="https://img.shields.io/npm/dt/rn-utility-style.svg" alt="Total Downloads"></a>
  <a href="https://github.com/ariona/rn-utility-style/releases"><img src="https://img.shields.io/npm/v/rn-utility-style.svg" alt="Latest Release"></a>
  <a href="https://github.com/ariona/rn-utility-style/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/rn-utility-style.svg" alt="License"></a>
</p>

------

![hero](https://ariona.github.io/rn-utility-style/assets/img/sample.83265ddd.jpg)

## Documentation
For full documentation, visit [https://ariona.github.io/rn-utility-style/](https://ariona.github.io/rn-utility-style/).

This library adopt [Tailwind CSS framework](https://tailwindcss.com/) which is an utility-first CSS framework for rapidly building website. In fact, we cherry picked some configuration and naming convention from tailwind so if you love using tailwind you'll love using RN Utility style.

## Usage

**Import Core component from `rn-utility-style`**

```js
import { View, Text, Image } from 'rn-utility-style'
```

**Use utility class on className props just like on the web.**

```jsx
<View className="rounded-lg bg-white shadow-xs">
  <Image className="rounded-t-lg w-full size-16/9" source={{uri:'https://unsplash.it/600/400'}}/>
  <View className="p-5 w-full">
    <Text className="text-indigo-700 mb-2 bg-indigo-100 rounded-full px-4 py-1 font-bold self-start">Blog</Text>
    <Text className="font-primary-bold font-xl mb-4">How to use search engine optimization to drive sales</Text>
    <Text className="text-gray-600 mb-6 font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga a unde ad alias cumque vel, qui tenetur enim, ipsam, nobis quo. Cumque a maiores nam dolorum, dignissimos similique sit molestiae.</Text>
    <View className="flex-row items-center">
      <View className="mr-4">
        <Image className="rounded-full size-1/1" source={{uri:'https://unsplash.it/64'}} style={{width: 36}}/>
        <View className="bg-green-500 rounded-full absolute b-2 border-white right-0" style={{width: 15,height: 15}}></View>
      </View>
      <View>
        <Text className="font-bold">Brenna Goyette</Text>
        <Text className="text-gray-500 font-sm">Mar, 16, 2020 - 6 min read</Text>
      </View>
    </View>
  </View>
</View>
```

**Override some style with style prop**

```jsx
<Image className="rounded-t-lg w-full size-16/9" style={{width:300, height: 300}}/>
```

## Usage with StyleSheet

To use the utility style with StyleSheet, use apply function

```js
import { StyleSheet } from 'react-native'
import { apply } from 'rn-utility-style'

const style = StyleSheet.create({
  tag: apply( "text-indigo-700 mb-2 bg-indigo-100 rounded-full px-4 py-1 font-bold self-start" ),
  card: {
    ...apply( "rounded-lg bg-white shadow-xs" ),
    width: 400,
    height: 500,
    backgroundColor: 'red'
  }
})
```

## Custom configuration

Place your configuration at the root of your app e.g `index.js` or `app.js`
```js
import RNUtilityStyle from 'rn-utility-style'

RNUtilityStyle.loadConfig({
  baseFontSize: 16,
  fontFamily: {
    primary: {
      regular : "inter-regular",
      bold    : "inter-bold"
    }
  }
})

```

## Example

Below is expo based example code for creating UI in above screenshot

```jsx
import React, { useState } from 'react';
import { AppLoading } from 'expo'
import * as Font from 'expo-font';
import { StyleSheet, ScrollView, SafeAreaView as SafeView, StatusBar } from 'react-native';

const fetchFonts = () => {
  return Font.loadAsync({
    'inter-bold'        : require('./assets/fonts/Inter-Bold.otf'),
    'inter-bold-italic' : require('./assets/fonts/Inter-BoldItalic.otf'),
    'inter-italic'      : require('./assets/fonts/Inter-Italic.otf'),
    'inter-regular'     : require('./assets/fonts/Inter-Regular.otf')
  });
};

import RNUtilityStyle, { buildComponent, View, Text, Image, Colors, apply } from 'rn-utility-style'

// Loading custom config
RNUtilityStyle.loadConfig({
  baseFontSize: 16,
  fontFamily: {
    primary: {
      regular : "inter-regular",
      bold    : "inter-bold"
    }
  }
})

// Creating unsupported component
const SafeAreaView = buildComponent(SafeView)

export default function App() {
  const [dataLoaded, setDataLoaded] = useState( false )

  if ( !dataLoaded ) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={ ()=>setDataLoaded(true) }
      />
    )
  }

  return (
    <SafeAreaView className="p-10 justify-center flex-1 bg-gray-100">
      <StatusBar/>
      <View className="rounded-lg bg-white shadow-xs">
        <Image className="rounded-t-lg w-full size-16/9" source={{uri:'https://unsplash.it/600/400'}}/>
        <View className="p-5 w-full">
          <Text className="text-indigo-700 mb-2 bg-indigo-100 rounded-full px-4 py-1 font-bold self-start">Blog</Text>
          <Text className="font-primary-bold font-xl mb-4">How to use search engine optimization to drive sales</Text>
          <Text className="text-gray-600 mb-6 font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga a unde ad alias cumque vel, qui tenetur enim, ipsam, nobis quo. Cumque a maiores nam dolorum, dignissimos similique sit molestiae.</Text>

          <View className="flex-row items-center">
            <View className="mr-4">
              <Image className="rounded-full size-1/1" source={{uri:'https://unsplash.it/64'}} style={{width: 36}}/>
              <View className="bg-green-500 rounded-full absolute b-2 border-white right-0" style={{width: 15,height: 15}}></View>
            </View>
            <View>
              <Text className="font-bold">Brenna Goyette</Text>
              <Text className="text-gray-500 font-sm">Mar, 16, 2020 - 6 min read</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
```