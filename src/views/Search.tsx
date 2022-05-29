import { View, ScrollView, Text } from "react-native";
import { styles } from "../styles/Search";
import SiteSearch from "../components/moleculs/siteSearch";
import { appState } from "../helpers/const/appState";
import TabSearch from "../components/moleculs/tabSearch";
import SearcherTop from "../components/moleculs/searcherTop";
import getData from "../hooks/getData";
import { useState } from "react";

export default function Search() {
  const [name, setName] = useState<string>('')
  const { data } = getData(`sites/search/${name}`)

  return (
    <View>
      <SearcherTop setName={setName} />
      <TabSearch />
      <ScrollView style={styles.containerResults}>
        {
          data ?( 
            (data.sites && data.sites.length > 0) ? (
              data.sites.map((site:appState["interfaceSiteCreate"], index:number) => (
                <SiteSearch site={site} key={index} />
              ))
            ) : <Text>Sitio no encontrado...</Text>
          ): <Text>Cargando...</Text>
        }
      </ScrollView>
    </View>
  );
}
