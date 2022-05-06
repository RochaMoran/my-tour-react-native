import { View } from "react-native";
import { styles } from "../../styles/Home";
import ContainerSitesType from "./containerSiteTypes";

export default function BodyHome({redirectSite, sites }: any) {
  return (
    <View style={styles.bodyHome}>
      <ContainerSitesType type="lg" title="Los mas Visitados" sites={sites} redirectSite={redirectSite}/>
      <ContainerSitesType type="hg" title="Los mas Nuevo" sites={sites} redirectSite={redirectSite}/>
      <ContainerSitesType type="lg" title="Los mas barato" sites={sites} redirectSite={redirectSite}/>
    </View>
  );
}
