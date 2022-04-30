import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../styles/global'
import { styles } from '../../styles/TabBar'

interface interfaceItemBar {
    text: string,
    nameIcon: string,
    focused: boolean
}

export default function ItemBarButton ({text, nameIcon, focused}:interfaceItemBar) {
    return (
        <View style={styles.item}>
            <Icon 
                name={nameIcon}
                size={20}
                color={focused ? colors.primary : "#333"}
            />
            <Text style={{color: focused ? colors.primary : "#333"}}>{text}</Text>
        </View>
    )
}