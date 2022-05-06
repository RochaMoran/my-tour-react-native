import { Text } from 'react-native'

export default function SeeSite ({ route }:any) {
    const { id, name } = route.params;
    
    return (
        <Text>Sitio: {name}</Text>
    )
}