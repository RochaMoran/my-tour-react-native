import { View, Image, Text } from 'react-native'
import { styles } from '../../styles/Loading'

export default function Loading () {
    return (
        <View style={styles.loadingContainer}>
            <Image style={styles.loadingLogo} source={require('../../assets/logo.png')}/>
        </View>
    )
}