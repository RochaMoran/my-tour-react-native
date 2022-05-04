import { View, Text, ScrollView, Alert} from "react-native";
import SiteSearch from "../components/moleculs/siteSearch";
import { styles as stylesSearch } from "../styles/Search";
import sites from '../fakeSites'
import { appState } from "../helpers/const/appState";
import { styles } from "../styles/MySites";

export default function MySites() {
  function deleteSite () {
    Alert.alert("Sitio eliminado, naa de mentira si")
  }

  function updateSite () {
    Alert.alert("Sitio actualizado, naa de mentira si")
  }

  return (
    <View>
        <View style={styles.containerTop}>
          <Text style={styles.titleHeader}>Mis Sitios</Text>          
        </View>
        <ScrollView style={stylesSearch.containerResults}>
          {
            sites.map((site:appState["interfaceSiteCreate"], index:number) => (
              <SiteSearch site={site} key={index} destroy={deleteSite} update={updateSite} />
            ))
          }
        </ScrollView>
    </View>
  );
}
