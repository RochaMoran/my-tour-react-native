import { Text } from "react-native-elements"
import { styles } from "../../styles/Login"

export default function TextErrorForm ({error, cls}:any) {
    return (
        <Text style={error ? [styles.messageError, cls] : styles.messageErrorHide}>{error}</Text>
    )
}