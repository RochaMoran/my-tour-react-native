import { TouchableOpacity, View } from "react-native"
import { styles } from "../../styles/TabBar"

interface interfaceCreateSiteButton {
    children?: any,
    onPress?: any,
    [x:string]: any;
}
export default function CreateSiteButton ({children, onPress}:interfaceCreateSiteButton) {
    return (
        <TouchableOpacity style={styles.buttonCreateSite} onPress={onPress}>
            <View style={styles.viewCreateSite}>
                {children}
            </View>
        </TouchableOpacity>
    )
}