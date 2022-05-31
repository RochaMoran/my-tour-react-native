import { useState, useEffect } from 'react'

export default function useCountries () {
    const [countries, setCountries] = useState<any>()

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(resp => resp.json())
            .then(setCountries)
    }, [])

    return {
        countries
    }
}