import { useCallback, useContext } from 'react'
import {Context} from '../context/userContext'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useUser() {
    const {jwt, setJwt} = useContext<any>(Context)

    const login = useCallback(async (data) => {
        await AsyncStorage.setItem('@storage_user', JSON.stringify(data))
        setJwt(data)
    }, [setJwt])
   
    const logout = useCallback(async () => {
        await AsyncStorage.clear()
        setJwt(null)
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        jwt,
        login,
        logout
    }
}
