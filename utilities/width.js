import _map from 'lodash.map'
import { Dimensions } from "react-native";

/**
 * Generate width definition based on spacing config
 *
 * @param {object} Configuration object
 * @return {object} width definition object
 *
 * @example
 *
 * widthSpacing({spacing: {...}})
 */
function widthSpacing(config) {
  const defs = {}
  _map( config.spacing, ( value, key ) => {
    defs[`w-${key}`] = { width: value * config.baseFontSize }
    defs[`min-w-${key}`] = { minWidth: value * config.baseFontSize }
    defs[`max-w-${key}`] = { maxWidth: value * config.baseFontSize }
  })

  return defs;

}

/**
 * Generate width definition based on width config
 *
 * @param {object} Configuration object
 * @return {object} width definition object
 *
 * @example
 *
 * widthSpacing({width: {...}})
 */
function widthConfig(config) {
  const defs = {}
  _map( config.width, ( value, key ) => {
    defs[`w-${key}`] = { width: value }
    defs[`min-w-${key}`] = { minWidth: value }
    defs[`max-w-${key}`] = { maxWidth: value }
  })

  return defs;

}

/**
 * Combining all width definitions into one defs
 *
 * @param {object} Configuration object
 * @return {object} width definistion object
 */
export default function( config ) {
  const style = {
    ...widthSpacing( config ),
    ...widthConfig( config ),
    "w-screen" : { width: Dimensions.get("window").width },
  }
  
  return style
}
