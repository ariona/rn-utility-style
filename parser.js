import Defaults   from './config'

import Flexbox       from './utilities/flexbox'
import Padding       from './utilities/padding'
import Margin        from './utilities/margin'
import Border        from './utilities/border'
import Color         from './utilities/color'
import Typography    from './utilities/typography'
import Position      from './utilities/position'
import Sizing        from './utilities/sizing'
import Opacity       from './utilities/opacity'
import Transform     from './utilities/transform'
import Interactivity from './utilities/interactivity'
import Shadow        from './utilities/shadow'


export function buildUtilities( config ) {
  const utils = {
    ...Flexbox( config ),
    ...Padding( config ),
    ...Margin( config ),
    ...Border( config ),
    ...Color( config ),
    ...Typography( config ),
    ...Sizing( config ),
    ...Opacity( config ),
    ...Transform( config ),
    ...Position,
    ...Interactivity,
    ...Shadow,

    // added user defined utils
    ...config.extra
  }

  return utils
}

/**
 * Parse Utility className into style
 *
 * @param {string} utility class
 * @param {object} configuration object
 *
 * @return {object} selected style object
 *
 * @example
 *
 * parseStyle( 'w-1/2', {} )
 */
export const parseStyle = (key, utilities) => {

  // If the key has colon in it, parse it first
  if ( key.includes(":") ) {
    return parseValue( key )
  }

  return utilities[key] ? utilities[key] : {};
}

/**
 * Parse Value with colon (custom value)
 *
 * @param {string} utility class
 *
 * @return {object} selected style object with custom value
 *
 * @example
 *
 * parseValue( 'mx:27' ) will output marginHorizontal: 27
 */
const parseValue = (key) => {
  
  const style = {}
  const data  = key.split(':');
  const props = {
    m: 'margin',
    p: 'padding',
    b: 'border'
  }
  const direction = {
    t: 'Top',
    b: 'Bottom',
    l: 'Left',
    r: 'Right',
    x: 'Horizontal',
    y: 'Vertical'
  }

  if ( props[data[0].charAt(0)] == undefined && direction[data[0].charAt(1)] == undefined ) {
    return {}
  }

  // all direction box model. e.g m:15
  if ( data[0].length>1 ) {
    style[ props[data[0].charAt(0)] + direction[data[0].charAt(1)]] = parseInt(data[1])
  } 
  // direction based box model. e.g mr:15
  else {
    style[ props[data[0].charAt(0)] ] = parseInt(data[1])
  }

  return style;
}

/**
 * Parse utility class outside rn-utility-style HOC
 *
 * @param {string} utility classes
 * @param {object} configuration object

 * @return {object} selected style object
 *
 * @example
 *
 * apply( 'w-1/2 bg-teal-200 b-4 b-red-200', {} )
 */
export function apply( classes, config ) {
  const conf  = { ...Defaults, ...config }
  const utilities = buildUtilities( conf )

  const style = classes.split(" ").map( c => parseStyle(c, utilities) );

  // flatten the objects and return it
  return style.reduce( (result, current) => Object.assign(result, current), {} )
}