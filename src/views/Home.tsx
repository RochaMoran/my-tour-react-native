import { View, Text } from "react-native";
import { styles } from "../styles/Welcome";
import { globalStyles } from "../styles/global";

export default function Home({navigation}:any) {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text>Home</Text>
    </View>
  );
}
