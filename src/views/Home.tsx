import { ScrollView, StatusBar } from "react-native";
import { styles } from "../styles/Home";
import { colors, globalStyles } from "../styles/global";
import HeaderHome from "../components/organims/headerHome";
import BodyHome from "../components/organims/bodyHome";

export default function Home({navigation}:any) {
  return (
    <ScrollView style={[globalStyles.container, styles.container]}>
      <StatusBar backgroundColor={colors.primary}/>
      <HeaderHome />
      <BodyHome />
    </ScrollView>
  );
}
