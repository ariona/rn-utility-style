import _map from 'lodash.map'

/**
 * Generate border definition based on borderWidth config
 *
 * @param {object} Configuration object
 * @return {object} borderWidth definition object
 *
 * @example
 *
 * borderAll({borderWidth: {...}})
 */
function borderAll(config) {
  const defs = {}
  _map( config.borderWidth, ( value, key ) => {
    defs[`b-${key}`] = { borderWidth: value }
  })

  return defs;

}

/**
 * Generate direction based border definition based on borderWidth config
 *
 * @param {object} Configuration object
 * @return {object} borderWidth definition object
 *
 * @example
 *
 * borderDir({borderWidth: {...}})
 */
function borderDir(config) {
  const directions = {'t':'Top','r':'Right','b':'Bottom','l':'Left'};
  const defs = {}

  _map( directions, (dirVal, dirKey) => {
    _map( config.borderWidth, (value, key) => {

      const def     = {}
      const utilVal = {}
      const prop    = `border${dirVal}Width`

      utilVal[ prop ]                 = value
      defs[ `b${ dirKey }-${ key }` ] = utilVal
    })

  } )

  return defs;

}

/**
 * Generate direction based borderRadius definition based on borderRadius config
 *
 * @param {object} Configuration object
 * @return {object} borderRadius definition object
 *
 * @example
 *
 * borderRadius({borderRadius: {...}})
 */
function borderRadius(config) {
  const directions = {
    't'  : 'Top',
    'r'  : 'Right',
    'b'  : 'Bottom',
    'l'  : 'Left',
    'tl' : 'TopLeft',
    'tr' : 'TopRight',
    'br' : 'BottomRight',
    'bl' : 'BottomLeft',
  };
  const defs = {}

  _map( config.borderRadius, (value, key) =>  defs[`rounded-${key}`] = { borderRadius: value * config.baseFontSize } )

  _map( directions, (dirVal, dirKey) => {
    _map( config.borderRadius, (value, key) => {

      const def     = {}
      const utilVal = {}

      if ( ['t','r','b','l'].indexOf(dirKey) > -1 ) {
        switch( dirKey ) {
          case 't':
            defs[`rounded-${dirKey}-${key}`] = {
              borderTopLeftRadius  : value * config.baseFontSize,
              borderTopRightRadius : value * config.baseFontSize
            }
            break;
          case 'r':
            defs[`rounded-${dirKey}-${key}`] = {
              borderTopRightRadius    : value * config.baseFontSize,
              borderBottomRightRadius : value * config.baseFontSize
            }
            break;
          case 'b':
            defs[`rounded-${dirKey}-${key}`] = {
              borderBottomLeftRadius  : value * config.baseFontSize,
              borderBottomRightRadius : value * config.baseFontSize
            }
            break;
          case 'l':
            defs[`rounded-${dirKey}-${key}`] = {
              borderTopLeftRadius    : value * config.baseFontSize,
              borderBottomLeftRadius : value * config.baseFontSize
            }
            break;
        }
      } else {
        const val = {}
        val[`border${dirVal}Radius`] = value * config.baseFontSize
        defs[`rounded-${dirKey}-${key}`] = val
      }
    })

  } )

  return defs;

}

/**
 * Generate direction based borderColor definition based on spacing config
 *
 * @param {object} Configuration object
 * @return {object} width definition object
 *
 * @example
 *
 * borderColor({colors: {...}})
 */
function borderColor( config ) {
  const defs = {}
  _map( config.colors, (value, key) => {
    if ( typeof value == "string" ) {
      defs[`border-${key}`] = { borderColor : value}
    } else {
      _map( value, (colorValue, colorKey) => {
        defs[`border-${key}-${colorKey}`] = { borderColor : colorValue }
      } )
    }
  } )

  return defs;
}

/**
 * Combining all border definitions into one defs
 *
 * @param {object} Configuration object
 * @return {object} border definition object
 */
export default function( config ) {
  const style = {
    ...borderAll( config ),
    ...borderDir( config ),
    ...borderColor( config ),
    ...borderRadius( config )
  }
  
  return style
}