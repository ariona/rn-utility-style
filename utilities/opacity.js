import _map from 'lodash.map'

/**
 * Generate opacity definition based on spacing config
 *
 * @param {object} Configuration object
 * @return {object} opacity definition object
 *
 * @example
 *
 * Opacity({opacity: {...}})
 */
function Opacity(config) {
  const defs = {}
  _map( config.opacity, ( value, key ) => {
    defs[`opacity-${key}`] = { opacity: value }
  })
  return defs;
}

/**
 * Combining all opacity definitions into one defs
 *
 * @param {object} Configuration object
 * @return {object} opacity definition object
 */
export default function( config ) {
  const style = {
    ...Opacity( config )
  }
  return style
}
