import { View, Text, TouchableOpacity } from "react-native";
import { appState } from "../../helpers/const/appState";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "../../styles/CreateSite";

export default function TimeControl({
  title,
  ...rest
}: appState["interfaceTimeControl"]) {
  return (
    <View
      style={[styles.vacuneContainer, styles.openSite, styles.borderItemForm]}
    >
      <Text style={styles.vacuneText}>{title}</Text>
      <TouchableOpacity {...rest}>
        <Icon name="time-outline" size={25} color="#888" />
      </TouchableOpacity>
    </View>
  );
}
