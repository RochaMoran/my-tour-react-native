import React, { useState, createContext, useEffect } from 'react'
import { appState } from '../helpers/const/appState'
import { getPeticion } from '../helpers/funtions/petitions'
import useUser from '../hooks/useUser'

export const ContextSites = createContext({})

export default function SitesContextProvider({children}:any) {  
  const [sites, setSites] = useState<appState["interfaceSiteContext"]>({
    all: [],
    user: [],
    page: 1,
    totalPages: 0
  })
  const { jwt } = useUser();

  useEffect(() => {
    async function getData() {
      await getPeticion("sites/all", {}).then((resp) => {
        setSites({
          all: resp.docs,
          user: resp.docs.filter((site:appState["interfaceOneSite"]) => site.created_by === jwt.user._id),
          page: resp.page,
          totalPages: resp.totalPages
        })
      });
    }
    getData();
  }, []);
   
  return <ContextSites.Provider value={{sites, setSites}}>
    {children}
  </ContextSites.Provider>
}
