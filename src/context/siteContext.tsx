import React, { useState, createContext } from 'react'
import { appState } from '../helpers/const/appState'

export const ContextSites = createContext({})

export default function SitesContextProvider({children}:any) {  
  const [sites, setSites] = useState<appState["interfaceSiteContext"]>({
    all: [],
    user: []
  })
   
  return <ContextSites.Provider value={{sites, setSites}}>
    {children}
  </ContextSites.Provider>
}
