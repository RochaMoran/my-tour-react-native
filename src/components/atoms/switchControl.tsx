import { View, Text, Switch } from "react-native";
import { appState } from "../../helpers/const/appState";

import { styles } from "../../styles/CreateSite";
import { colors } from "../../styles/global";

export default function SwitchControl({
  title,
  conditional,
  name,
  setSite,
}: appState["interfaceSwitchControl"]) {
  return (
    <View style={[styles.vacuneContainer, styles.borderItemForm]}>
      <Text style={styles.vacuneText}>{title}</Text>
      <Switch
        style={styles.vacuneSwitch}
        trackColor={{ false: "#767577", true: colors.primary }}
        thumbColor={conditional ? "#25592a" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() =>
          setSite(name, !conditional )
        }
        value={conditional}
      />
    </View>
  );
}
