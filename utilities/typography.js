import _map from 'lodash.map'

/**
 * Generate fontWeight definition based on fontWeight config
 *
 * @param {object} Configuration object
 * @return {object} fontWeight definition object
 *
 * @example
 *
 * FontWeight({fontWeight: {...}})
 */
function FontWeight( config ) {
  const defs = {}
  _map( config.fontWeight, (value, key) => {
    defs[`font-${key}`] = { fontWeight : value}
  } )

  return defs;
}

/**
 * Generate fontWeight definition based on fontWeight config
 *
 * @param {object} Configuration object
 * @return {object} fontWeight definition object
 *
 * @example
 *
 * FontWeight({fontWeight: {...}})
 */
function FontFamily( config ) {
  const defs = {}
  _map( config.fontFamily, (level, type) => {
    _map( level, ( value, weight ) => {
      defs[`font-${type}-${weight}`] = { fontFamily: value }
    } )

  } )

  return defs;
}

/**
 * Generate fontSize definition based on fontSize config
 *
 * @param {object} Configuration object
 * @return {object} fontSize definition object
 *
 * @example
 *
 * FontSize({fontSize: {...}})
 */
function FontSize( config ) {
  const defs = {}
  _map( config.fontSize, (value, key) => {
    defs[`font-${key}`] = { fontSize : value * config.baseFontSize }
  } )

  return defs;
}

/**
 * Generate letterSpacing definition based on letterSpacing config
 *
 * @param {object} Configuration object
 * @return {object} letterSpacing definition object
 *
 * @example
 *
 * LetterSpacing({letterSpacing: {...}})
 */
function LetterSpacing( config ) {
  const defs = {}
  _map( config.letterSpacing, (value, key) => {
    defs[`tracking-${key}`] = { letterSpacing : value * config.baseFontSize }
  } )

  return defs;
}

/**
 * Generate lineHeight definition based on lineHeight config
 *
 * @param {object} Configuration object
 * @return {object} lineHeight definition object
 *
 * @example
 *
 * LineHeight({lineHeight: {...}})
 */
function LineHeight( config ) {
  const defs = {}
  _map( config.lineHeight, (value, key) => {
    defs[`leading-${key}`] = { lineHeight : value * config.baseFontSize }
  } )

  return defs;
}

/**
 * Combining all typography definitions into one defs
 *
 * @param {object} Configuration object
 * @return {object} typography definition object
 */
export default function( config ) {
  const style = {
    ...FontFamily( config ),
    ...FontWeight( config ),
    ...FontSize( config ),
    ...LetterSpacing( config ),
    ...LineHeight( config ),

    // Text Alignment
    'text-left'    : { textAlign: 'left' },
    'text-center'  : { textAlign: 'center' },
    'text-right'   : { textAlign: 'right' },
    'text-justify' : { textAlign: 'justify' },

    // Text Transform
    'uppercase'    : { textTransform: 'uppercase'},
    'lowercase'    : { textTransform: 'lowercase'},
    'capitalize'   : { textTransform: 'capitalize'},
    'normal-case'  : { textTransform: 'none'},
  }
  
  return style
}