import { View, Text, ScrollView } from "react-native";
import SiteSearch from "../components/moleculs/siteSearch";
import { styles as stylesSearch } from "../styles/Search";
import { appState } from "../helpers/const/appState";
import { styles } from "../styles/MySites";
import useSites from "../hooks/useSites";
import { useState } from "react";

export default function MySites() {
  const { sitesByUser } = useSites()

  return (
    <View>
        <View style={styles.containerTop}>
          <Text style={styles.titleHeader}>Mis Sitios</Text>          
        </View>
        <ScrollView style={stylesSearch.containerResults}>
          {
            sitesByUser.length > 0 && sitesByUser.map((site:appState["interfaceSiteCreate"], index:number) => (
              <SiteSearch site={site} key={index} mySites={true} />
            ))
          }
        </ScrollView>
    </View>
  );
}
