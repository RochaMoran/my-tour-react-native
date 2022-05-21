import { useState, useEffect } from 'react'
import { getPeticion } from '../helpers/funtions/petitions'

export default function getData (url:string) {
    const [data, setData] = useState<any>(null)
    useEffect(() => {
      async function getData () {
        getPeticion(url, {})
          .then(setData)
      }
      getData()
    }, [url])

    return {
        data
    }
}