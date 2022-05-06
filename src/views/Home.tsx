import { ScrollView, StatusBar, Alert } from "react-native";
import { styles } from "../styles/Home";
import { colors, globalStyles } from "../styles/global";
import BodyHome from "../components/organims/bodyHome";
import HeaderHome from "../components/organims/headerHome";
import sites from '../fakeSites'

export default function Home({navigation}:any) {
  return (
    <ScrollView style={[globalStyles.container, styles.container]}>
      <StatusBar backgroundColor={colors.primary}/>
      <HeaderHome />
      <BodyHome sites={sites} redirectSite={navigation} />
    </ScrollView>
  );
}
