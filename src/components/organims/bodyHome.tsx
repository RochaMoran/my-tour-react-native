import { View } from "react-native";
import useSites from "../../hooks/useSites";
import { styles } from "../../styles/Home";
import ContainerSitesType from "./containerSiteTypes";

export default function BodyHome() {
  const {allSites, getMoreSites} = useSites()

  return (
    <View style={styles.bodyHome}>
      <ContainerSitesType type="lg" title="Los mas Visitados" sites={allSites} getMoreSites={getMoreSites} />
      <ContainerSitesType type="hg" title="Los mas Nuevo" sites={allSites} getMoreSites={getMoreSites}/>
    </View>
  );
}
