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
      <HeaderHome imgUrl="http://c.files.bbci.co.uk/E02E/production/_102809375_machu.jpg" title="Pasea por el mundo..." subTitle="El viajero ve lo que ve, el turista ve lo que ha venido a ver" />
      <BodyHome sites={sites} redirectSite={navigation} />
    </ScrollView>
  );
}
