import _map from 'lodash.map'

/**
 * Generate margin definition based on spacing config
 *
 * @param {object} Configuration object
 * @return {object} width definition object
 *
 * @example
 *
 * marginAll({spacing: {...}})
 */
function marginAll(config) {
  const defs = {}
  _map( config.spacing, ( value, key ) => {
    defs[`m-${key}`] = { margin: value * config.baseFontSize }
  })

  return defs;
}

/**
 * Generate direction based margin definition based on spacing config
 *
 * @param {object} Configuration object
 * @return {object} width definition object
 *
 * @example
 *
 * marginDir({spacing: {...}})
 */
function marginDir(config) {
  const directions = {'t':'Top','r':'Right','b':'Bottom','l':'Left','x':'Horizontal','y':'Vertical'};
  const defs = {}

  _map( directions, (dirVal, dirKey) => {
    _map( config.spacing, (value, key) => {

      const def     = {}
      const utilVal = {}
      const utilKey = `m${dirKey}-${key}`
      const prop    = `margin${dirVal}`

      // multiply the baseFontSize with the scale factor
      utilVal[prop] = value * config.baseFontSize
      defs[utilKey] = utilVal
    })

  } )

  return defs;

}

/**
 * Combining all margin definitions into one defs
 *
 * @param {object} Configuration object
 * @return {object} margin definition object
 */
export default function( config ) {
  const style = {
    ...marginAll( config ),
    ...marginDir( config )
  }
  
  return style
}