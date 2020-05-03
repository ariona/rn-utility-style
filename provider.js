import React, {useState, useEffect} from 'react'
import Defaults                     from './config'

import { buildUtilities } from './parser'

export const ThemeContext = React.createContext({
  config: Defaults,
  utilities: {}
});

/**
 * Utility Provider Component for passing context
 *
 * @param {props} property (config)
 * @return {Component} React Context Provider Component
 *
 * @example
 *
 * <UtilityProvider config={{...}}>...child...</UtilityProvider>
 */
export default function UtilityProvider(props) {
  

  const [config, setConfig] = useState({...Defaults, ...props.config })
  const [utilities, setUtilities] = useState( buildUtilities(config) )

  useEffect(
    () => {
      setConfig( {...Defaults, ...props.config } )
      setUtilities( buildUtilities( config ) )
    },
    [props.config]
  )

  return (
    <ThemeContext.Provider value={{config, utilities}}>
      {props.children}
    </ThemeContext.Provider>
  )
}