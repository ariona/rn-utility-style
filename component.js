import React, { useContext } from 'react'
import {
  View as RNView,
  Text as RNText,
  Image as RNImage,
  ImageBackground as RNImageBackground,
  TouchableOpacity as RNTouchableOpacity,
  TouchableHighlight as RNTouchableHighlight,
  ScrollView as RNScrollView,
  FlatList as RNFlatList,
  SectionList as RNSectionList,
  StyleSheet
} from 'react-native'
import { parseStyle } from './parser'
import { ThemeContext } from './provider'

/**
 * Create HOC from React Native Core component
 *
 * @param {Component} Component to be wrapped
 * @return {Component} New component with applied utility style
 *
 * @example
 *
 * buildComponent( FlatList )
 */
export default function buildComponent(WrappedComponent) {
  return function ( {className, style, ...rest} ) {
    const props  = { ...rest, style: [] }
    const config = useContext(ThemeContext)

    // If the component is Text, then apply config's font family & size
    if( WrappedComponent.displayName == "Text" ) {
      props.style.push({
        fontFamily : config.fontFamily.primary.regular,
        fontSize   : config.baseFontSize
      })
    }

    // If the className has utility class value, let's parse it
    if ( className ) {
      let styles          = {}
      let transform       = []

      const parsedUtility = className.split(" ").map( c => parseStyle(c, config) );

      // Lets combine transform property values
      parsedUtility.map( rule => {
        if ( rule.hasOwnProperty('transform') ) {
          transform.push( rule.transform[0] )
        } else {
          styles = {...styles, ...rule}
        }
      } )
      // extends transform if there is value
      if ( transform.length ) {
        props.style.push( {...styles, transform} )
      } else {
        props.style.push( {...styles} )
      }
    }


    // If the style prop has value, let's push it.
    // called last, so it can override the utility classes style
    if ( style ) {
      const inline = StyleSheet.create({ style })
      props.style.push( inline.style )
    }

    return (
      <WrappedComponent {...props} />
    )
  }
}

export const View               = buildComponent( RNView )
export const Text               = buildComponent( RNText )
export const Image              = buildComponent( RNImage )
export const ImageBackground    = buildComponent( RNImageBackground )
export const TouchableOpacity   = buildComponent( RNTouchableOpacity )
export const TouchableHighlight = buildComponent( RNTouchableHighlight )
export const ScrollView         = buildComponent( RNScrollView )
export const FlatList           = buildComponent( RNFlatList )
export const SectionList        = buildComponent( RNSectionList )
