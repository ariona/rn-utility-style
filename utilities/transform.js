import _map from 'lodash.map'

/**
 * Generate scale definition based on scale config
 *
 * @param {object} Configuration object
 * @return {object} scale definition object
 *
 * @example
 *
 * scale({scale: {...}})
 */
function Scale(config) {
  const defs = {}
  _map( config.scale, ( value, key ) => {
    defs[`scale-${key}`] = { transform: [{scale: value}] }
    defs[`scale-x-${key}`] = { transform: [{scaleX: value}] }
    defs[`scale-y-${key}`] = { transform: [{scaleY: value}] }
  })
  return defs;
}

/**
 * Generate rotate definition based on rotate config
 *
 * @param {object} Configuration object
 * @return {object} rotate definition object
 *
 * @example
 *
 * rotate({rotate: {...}})
 */
function Rotate(config) {
  const defs = {}
  _map( config.rotate, ( value, key ) => {
    defs[`rotate-${key}`] = { transform: [{rotate: value }] }

    if ( value ) {
      defs[`-rotate-${key}`] = { transform: [{rotate: `-${value}`}] }
    }
  })
  return defs;
}

/**
 * Generate translate definition based on translate config
 *
 * @param {object} Configuration object
 * @return {object} translate definition object
 *
 * @example
 *
 * translate({translate: {...}})
 */
function Translate(config) {
  const defs = {}

  _map( config.spacing, ( value, key ) => {
    defs[`translate-x-${key}`] = { transform: [{translateX: value * config.baseFontSize}] }
    defs[`translate-y-${key}`] = { transform: [{translateY: value * config.baseFontSize}] }

    if ( value ) {
      defs[`-translate-x-${key}`] = { transform: [{translateX: -value * config.baseFontSize}] }
      defs[`-translate-y-${key}`] = { transform: [{translateY: -value * config.baseFontSize}] }
    }
  })

  _map( config.translate, ( value, key ) => {
    defs[`translate-x-${key}`] = { transform: [{translateX: value}] }
    defs[`translate-y-${key}`] = { transform: [{translateY: value}] }

    if ( value ) {
      defs[`-translate-x-${key}`] = { transform: [{translateX: -value}] }
      defs[`-translate-y-${key}`] = { transform: [{translateY: -value}] }
    }
  })

  return defs;
}

/**
 * Combining all transform definitions into one defs
 *
 * @param {object} Configuration object
 * @return {object} transform definition object
 */
export default function( config ) {
  const style = {
    ...Scale( config ),
    ...Rotate( config ),
    ...Translate( config ),
  }

  return style
}
