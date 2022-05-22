import { useState, useEffect } from 'react'
import {Alert, ToastAndroid} from 'react-native'
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker'
import useLocation from './useLocation'
import { createSite } from '../helpers/funtions/petitions'

export default function useCreateSite () {
    const { location, updateCoordinates } = useLocation();
    const [site, setSite] = useState<any>({
        image: {
            value: {
                uri: '',
                type: '',
                name: '',
            },
            error: ''
        },
        name: {
            value: '',
            error: ''
        },
        country: {
            value: '',
            error: ''
        },
        vaccineCovid: {
            value: false,
            error: ''
        },
        faceMask: {
            value: false,
            error: ''
        },
        statusOpen: {
            value: false,
            error: ''
        },
        openTimes: {
            value: '',
            error: ''
        },
        closeTimes: {
            value: '',
            error: ''
        },
        description: {
            value: '',
            error: ''
        },
        createdBy: '628284cdca1078f744c5547e'
    })
    const [countries, setCountries] = useState<any>()

    function updateAttributteSite (name:string, value:any) {
        setSite({
            ...site,
            [name]: {
                value: value,
                error: ''
            }
        })
    }


    const askForPermission = async () => {
        const { status } = await requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('no permissions to access camera!')
            return false
        }
        return true
    }
    
    const uploadImage = async () => {
        const permisions = await askForPermission();
        if(permisions){
            let result = await launchImageLibraryAsync({
                mediaTypes: MediaTypeOptions.All,
                allowsEditing: false,
                aspect: [4, 3],
                quality: 1,
            });
    
            const {cancelled} = result;
    
            if(!cancelled){
                const localUri = result.uri,
                filename = localUri.split("/").pop(),
                match = /\.(\w+)$/.exec(filename || ''),
                type = match ? `image/${match[1]}` : `image`

                setSite({
                    ...site,
                    image: {
                        value: {
                            uri: localUri,
                            name: filename,
                            type: type
                        }
                    }
                })
            }
    
            return;
        } else {
            ToastAndroid.show("Permisos denegados", ToastAndroid.SHORT);
        }
    }
    
    async function handleSubmitSite () {
        if(validateImage() && validateText("name") && validateText("description") && validateText("country") && validateText("openTimes") && validateText("closeTimes")) {
            let resp = await createSite({site, location})
            
            if(resp.ok) {
                ToastAndroid.show("Sitio creado exitosamente", ToastAndroid.SHORT);
            } else {
                ToastAndroid.show("Ha ocurrido un error al crear el sitio", ToastAndroid.SHORT);
            }
        }
        
    }

    function validateText (name:string) {
        if(site[name].value === '') {
            setSite({
                ...site,
                [name]: {
                    ...site[name],
                    error: `Favor, seleccione ${name} del sitio`
                }
            })

            return false
        }

        return true
    }

    function validateImage () {
        if((site.image.value.uri || site.image.value.name || site.image.value.type) === '') {
            setSite({
                ...site,
                image: {
                    ...site.image,
                    error: 'Favor, seleccione la imagen del sitio'
                }
            })

            return false;
        }

        setSite({
            ...site,
            image: {
                ...site.image,
                error: ''
            }
        })
        return true;
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(resp => resp.json())
            .then(setCountries)
    }, [])

    return {
        countries,
        site,
        location,
        setSite,
        updateAttributteSite,
        uploadImage,
        updateCoordinates,
        handleSubmitSite
    }
}