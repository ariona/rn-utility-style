import { apply }       from './parser'
import buildComponent  from './component'
import Defaults        from './default'
import RNUtilityStyle  from './config'
import _map from 'lodash.map'

export default RNUtilityStyle;

import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  FlatList,
  SectionList
} from './component'

/**
 * Color function to get color value from config
 *
 * @param {string} color string key
 * @return {string} color value
 * 
 * @example
 * Colors("red-100")
 */
export const Colors = function( key ) {
  const defs = {}

  _map( RNUtilityStyle.config.colors, (value, key) => {
    // check if the value is a single string value
    if ( typeof value == "string" ) {

      defs[`${key}`] = value

    } else {
    // if it does have object in it, let's map it again
      _map( value, (colorValue, colorKey) => {
        defs[`${key}-${colorKey}`] = colorValue
      } )

    }
  } )

  return defs[key];
}

export {
  buildComponent,
  apply,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  FlatList,
  SectionList
}