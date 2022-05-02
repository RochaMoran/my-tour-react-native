import React, { useState, createContext } from 'react'
import { appState } from '../helpers/const/appState'

export const Context = createContext({})

export default function UserContextProvider({children}:appState["interfaceContextAuth"]) {
  const [jwt, setJwt] = useState<any>(null)

  return <Context.Provider value={{jwt, setJwt}}>
    {children}
  </Context.Provider>
}
