import { useCallback, useContext } from 'react'
import {Context} from '../context/userContext'

export default function useUser() {
    const {jwt, setJwt} = useContext<any>(Context)

    const login = useCallback(() => {
        setJwt('test')
    }, [setJwt])
   
    const logout = useCallback(() => {
        setJwt(null)
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}
