import { View, ScrollView, Text } from "react-native";
import { styles } from "../styles/Search";
import sites from '../fakeSites'
import SiteSearch from "../components/moleculs/siteSearch";
import { appState } from "../helpers/const/appState";
import TabSearch from "../components/moleculs/tabSearch";
import SearcherTop from "../components/moleculs/searcherTop";
import getData from "../hooks/getData";

export default function Search() {
  const { data } = getData(`sites/`)
  return (
    <View>
      <SearcherTop />
      <TabSearch />
      <ScrollView style={styles.containerResults}>
        {
          data ?( data.sites.map((site:appState["interfaceSiteCreate"], index:number) => (
            <SiteSearch site={site} key={index} />
          ))): <Text>Cargando...</Text>
        }
      </ScrollView>
    </View>
  );
}
