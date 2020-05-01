import React, {useState, useEffect} from 'react'
import Defaults                     from './config'

export const ThemeContext = React.createContext(Defaults);

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
  const [config, setConfig] = useState({...Defaults, ...props.config})

  useEffect(
    () => {
      setConfig( {...Defaults, ...props.config} )
    },
    [props.config]
  )

  return (
    <ThemeContext.Provider value={config}>
      {props.children}
    </ThemeContext.Provider>
  )
}