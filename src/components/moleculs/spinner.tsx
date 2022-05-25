import { ActivityIndicator, View } from 'react-native'
import { colors } from 'react-native-elements'
import { styles } from '../../styles/Loading'

export default function Spinner () {
    return (
        <View style={styles.containerSpinner}>
            <ActivityIndicator style={{minHeight: 400}} size="large" color={colors.primary} />
        </View>
    )
}