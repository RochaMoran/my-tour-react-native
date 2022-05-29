import { View, Text, ScrollView, Alert, Modal, TouchableOpacity} from "react-native";
import SiteSearch from "../components/moleculs/siteSearch";
import { styles as stylesSearch } from "../styles/Search";
import { appState } from "../helpers/const/appState";
import { styles } from "../styles/MySites";
import getData from "../hooks/getData";
import useUser from "../hooks/useUser";
import { useState } from "react";

export default function MySites() {
  const { jwt } = useUser()
  const { data } = getData(`sites/user/${jwt.user._id}`)

  return (
    <View>
        <View style={styles.containerTop}>
          <Text style={styles.titleHeader}>Mis Sitios</Text>          
        </View>
        <ScrollView style={stylesSearch.containerResults}>
          {
            data && data.sites.map((site:appState["interfaceSiteCreate"], index:number) => (
              <SiteSearch site={site} key={index} mySites={true} />
            ))
          }
        </ScrollView>
    </View>
  );
}
