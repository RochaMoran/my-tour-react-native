import { View, Text, ScrollView } from "react-native";
import { appState } from "../../helpers/const/appState";
import { styles } from "../../styles/Home";

export default function ContainerSites({
  title,
  children,
  ...rest
}: appState["interfaceSite"]) {
  return (
    <View style={styles.moreVisited} {...rest}>
      <Text style={styles.containerTitle}>{title}</Text>
      <ScrollView
        style={styles.sitesHorizontal}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}
