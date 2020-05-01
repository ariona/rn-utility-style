export default function( config ) {
  const style = {
    // Flex
    'flex-initial': {
      flexGrow   : 0,
      flexShrink : 1,
    },
    'flex-1'      : { flex: 1 },
    'flex-auto'   : {
      flexGrow   : 1,
      flexShrink : 1,
    },
    'flex-none'   : {},

    // Direction
    'flex-row'          : { flexDirection: 'row' },
    'flex-row-reverse'  : { flexDirection: 'row-reverse' },
    'flex-col'          : { flexDirection: 'column' },
    'flex-col-reverse'  : { flexDirection: 'column-reverse' },
    
    // Wrap
    'flex-no-wrap'      : { flexWrap: 'nowrap' },
    'flex-wrap'         : { flexWrap: 'wrap' },
    'flex-wrap-reverse' : { flexWrap: 'wrap-reverse' },
    
    // Align
    'items-stretch'     : { alignItems: 'stretch' },
    'items-start'       : { alignItems: 'flex-start' },
    'items-center'      : { alignItems: 'center' },
    'items-end'         : { alignItems: 'flex-end' },
    'items-baseline'    : { alignItems: 'baseline' },

    // Content
    'content-start'     : { alignContent: 'flex-start' },
    'content-center'    : { alignContent: 'center' },
    'content-end'       : { alignContent: 'flex-end' },
    'content-between'   : { alignContent: 'space-between' },
    'content-around'    : { alignContent: 'space-around' },

    // Self
    'self-auto'         : { alignSelf: 'auto' },
    'self-start'        : { alignSelf: 'flex-start' },
    'self-center'       : { alignSelf: 'center' },
    'self-end'          : { alignSelf: 'flex-end' },
    'self-stretch'      : { alignSelf: 'stretch' },

    // Justify
    'justify-start'     : { justifyContent: 'flex-start' },
    'justify-center'    : { justifyContent: 'center' },
    'justify-end'       : { justifyContent: 'flex-end' },
    'justify-between'   : { justifyContent: 'space-between' },
    'justify-around'    : { justifyContent: 'space-around' },

    // Grow
    'flex-grow'         : { flexGrow: 1 },
    'flex-grow-0'       : { flexGrow: 0 },

    // Shrink
    'flex-shrink'       : { flexShrink: 1 },
    'flex-shrink-0'     : { flexShrink: 0 },


  }

  return style
}