import { useEffect, useState } from "react"

export default function useField (state:any, setState:any, action:any) {
    const [isSucces, setIsSucces] = useState<boolean>(false)

    useEffect(() => {
        return () => action()
    }, [isSucces])

    function handleInput (name:string, value:any) {
        if(name === 'password') {
            let passValidateResp = validatePassword(value)
            return updateState(passValidateResp.verified, name, passValidateResp.value, passValidateResp.error)

        }

        updateState(validateEmail(value), name, value, `Su ${name} no es valido, favor, reviselo`)
    }

    function updateState (verified:boolean, name:string, value:any, error: string) {
        if(verified){
            return setState({
                ...state,
                [name]: {
                    value: value,
                    error: ''
                },
                error: ''
            })
        }

        setState({
            ...state,
            [name]: {
                value: '',
                error: error,
            },
            error: 'Favor, revise sus campos'
        })
    }

    function validatePassword (value:string) {
        if (value.length < 5 || value.length > 255) return {verified: false, error: 'Su contraseña debe tener entre 5 a 255 caracteres', value: ''};
        
        return {verified: true, error: '', value: value};
    }

    function validateEmail (email:any) {
        if (
            !email ||
            !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
              email
            )
          ) {
            return false;
          } else {
            return true;
          }
    }

    async function handleSubmit (objectParams:any) {
        if(objectParams.validated){
            setState({
                ...state,
                error: 'Favor, revise sus campos'
            })
        } else {
            let response = await objectParams.peticionFunction(state, objectParams.url)
            console.log(response)
            if(response.ok) {
                setIsSucces(true)
            }

            setState({
                ...state,
                error: response.msg || "Ha ocurrido un error al hacer la peticion"
            })
        }
    }

    return {
        handleInput,
        handleSubmit
    }
}