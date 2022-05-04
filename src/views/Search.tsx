import { View, ScrollView } from "react-native";
import { styles } from "../styles/Search";
import sites from '../fakeSites'
import SiteSearch from "../components/moleculs/siteSearch";
import { appState } from "../helpers/const/appState";
import TabSearch from "../components/moleculs/tabSearch";
import SearcherTop from "../components/moleculs/searcherTop";

export default function Search() {
  return (
    <View>
      <SearcherTop />
      <TabSearch />
      <ScrollView style={styles.containerResults}>
        {
          sites.map((site:appState["interfaceSiteCreate"], index:number) => (
            <SiteSearch site={site} key={index} />
          ))
        }
      </ScrollView>
    </View>
  );
}
