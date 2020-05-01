import _map from 'lodash.map'

/**
 * Generate color definition for text-color & bg-color
 *
 * @param {object} Configuration object (colors)
 * @return {object} colors definition object
 */
function Color( config ) {
  const defs = {}

  _map( config.colors, (value, key) => {

    // check if the value is a single string value
    if ( typeof value == "string" ) {

      defs[`text-${key}`] = { color : value}
      defs[`bg-${key}`]   = { backgroundColor : value}

    } else {
    // if it does have object in it, let's map it again
      _map( value, (colorValue, colorKey) => {
        defs[`text-${key}-${colorKey}`] = { color : colorValue }
        defs[`bg-${key}-${colorKey}`]   = { backgroundColor : colorValue }
      } )

    }
  } )

  return defs
}

export default function( config ) {
  const style = {
    ...Color( config ),
  }
  
  return style
}