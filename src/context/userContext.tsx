import React, { useState, createContext, useEffect } from 'react'
import { appState } from '../helpers/const/appState'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Context = createContext({})

export default function UserContextProvider({children}:appState["interfaceContextAuth"]) {  
  const [jwt, setJwt] = useState<any>(null)

  useEffect(() => {
    async function getTokenUser () {
      const jsonValue = await AsyncStorage.getItem('@storage_user')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
    
    getTokenUser().then(setJwt)
  }, [])

  return <Context.Provider value={{jwt, setJwt}}>
    {children}
  </Context.Provider>
}
