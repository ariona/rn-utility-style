import _map from 'lodash.map'

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
function width(config) {
  const defs = {}
  _map( config.spacing, ( value, modifier ) => {
    defs[`w-${modifier}`]     = { width: value * config.baseFontSize }
    defs[`min-w-${modifier}`] = { minWidth: value * config.baseFontSize }
    defs[`max-w-${modifier}`] = { maxWidth: value * config.baseFontSize }
  })

  _map( config.width, ( value, modifier ) => {
    defs[`w-${modifier}`]     = { width: value }
    defs[`min-w-${modifier}`] = { minWidth: value }
    defs[`max-w-${modifier}`] = { maxWidth: value }
  })

  return defs;
}

/**
 * Generate height definition based on spacing config
 *
 * @param {object} Configuration object
 * @return {object} height definition object
 *
 * @example
 *
 * height({spacing: {...}})
 */
function height(config) {
  const defs = {}
  _map( config.spacing, ( value, modifier ) => {
    defs[`h-${modifier}`]     = { height: value * config.baseFontSize }
    defs[`min-h-${modifier}`] = { minHeight: value * config.baseFontSize }
    defs[`max-h-${modifier}`] = { maxHeight: value * config.baseFontSize }
  })

  _map( config.height, ( value, modifier ) => {
    defs[`h-${modifier}`]     = { height: value }
    defs[`min-h-${modifier}`] = { minHeight: value }
    defs[`max-h-${modifier}`] = { maxHeight: value }
  })

  return defs;
}

/**
 * Generate size definition based on spacing config
 *
 * @param {object} Configuration object
 * @return {object} size definition object
 *
 * @example
 *
 * size({spacing: {...}})
 */
function Size(config) {
  const defs = {}
  
  _map( config.size, ( value, modifier ) => {
    defs[`size-${modifier}`] = { 
      width  : value,
      height : value,
    }
  })

  _map( config.aspectRatio, ( value, modifier ) => {
    defs[`size-${modifier}`] = { aspectRatio: value }
  })

  return defs;
}


/**
 * Combining all width definitions into one defs
 *
 * @param {object} Configuration object
 * @return {object} width definition object
 */
export default function( config ) {
  const style = {
    ...width( config ),
    ...height( config ),
    ...Size( config ),
  }
  
  return style
}
