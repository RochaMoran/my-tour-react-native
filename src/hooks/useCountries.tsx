import { useState, useEffect } from 'react'
import sortCountries from '../helpers/funtions/sortCountries'

export default function useCountries () {
    const [countries, setCountries] = useState<any>()

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(resp => resp.json())
            .then(response => setCountries(sortCountries(response)))
    }, [])

    return {
        countries
    }
}