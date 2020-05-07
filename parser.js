import RNUtilityStyle from './config'

/**
 * Parse Utility className into style
 *
 * @param {string} utility class
 *
 * @return {object} selected style object
 *
 * @example
 *
 * parseStyle( 'w-1/2')
 */
export const parseStyle = (key) => {

  // If the key has colon in it, parse it first
  if ( key.includes(":") ) {
    return parseValue( key )
  }

  return RNUtilityStyle.utilities[key] ? RNUtilityStyle.utilities[key] : {};
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
 * @return {object} selected style object
 *
 * @example
 *
 * apply( 'w-1/2 bg-teal-200 b-4 b-red-200')
 */
export function apply( classes ) {

  const style = classes.split(" ").map( c => parseStyle(c) );

  // flatten the objects and return it
  return style.reduce( (result, current) => Object.assign(result, current), {} )
}