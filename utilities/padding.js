import _map from 'lodash.map'

/**
 * Generate padding definition based on spacing config
 *
 * @param {object} Configuration object
 * @return {object} width definition object
 *
 * @example
 *
 * paddingAll({spacing: {...}})
 */
function paddingAll(config) {
  const defs = {}
  _map( config.spacing, ( value, key ) => {
    defs[`p-${key}`] = { padding: value * config.baseFontSize }
  })

  return defs;

}

/**
 * Generate direction based padding definition based on spacing config
 *
 * @param {object} Configuration object
 * @return {object} width definition object
 *
 * @example
 *
 * paddingDir({spacing: {...}})
 */
function paddingDir(config) {

  // Define possible direction
  const directions = {'t':'Top','r':'Right','b':'Bottom','l':'Left','x':'Horizontal','y':'Vertical'};
  const defs = {}

  // Mapping all possible direction
  _map( directions, (dirVal, dirKey) => {
    // Mapping spacing config
    _map( config.spacing, (value, key) => {

      const def     = {}
      const utilVal = {}
      const utilKey = `p${dirKey}-${key}` // e.g: pb-2
      const prop    = `padding${dirVal}`  // e.g: paddingBottom

      // multiply the baseFontSize with the scale factor
      utilVal[prop] = value * config.baseFontSize
      defs[utilKey] = utilVal
    })

  } )

  return defs;

}

/**
 * Combining all padding definitions into one defs
 *
 * @param {object} Configuration object
 * @return {object} padding definition object
 */
export default function( config ) {
  const style = {
    ...paddingAll( config ),
    ...paddingDir( config )
  }
  
  return style
}