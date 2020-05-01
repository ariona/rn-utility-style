import UtilityProvider from './provider'
import { apply }       from './parser'
import buildComponent  from './component'
import Config          from './config'

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

// export Colors value from default config
export const Colors = Config.colors
export {
  UtilityProvider,
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