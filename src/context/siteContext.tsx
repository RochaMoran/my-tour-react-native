import React, { useState, createContext, useEffect } from 'react'
import { appState } from '../helpers/const/appState'
import { getPeticion } from '../helpers/funtions/petitions'
import useUser from '../hooks/useUser'

export const ContextSites = createContext({})

export default function SitesContextProvider({children}:any) {  
  const [sites, setSites] = useState<appState["interfaceSiteContext"]>({
    all: [],
    user: []
  })
  const { jwt } = useUser();

  useEffect(() => {
    async function getData() {
      await getPeticion("sites/", {}).then((resp) => {
        setSites({
          all: resp.sites,
          user: resp.sites.filter((site:appState["interfaceOneSite"]) => site.created_by === jwt.user._id)
        })
      });
    }
    getData();
  }, []);
   
  return <ContextSites.Provider value={{sites, setSites}}>
    {children}
  </ContextSites.Provider>
}
