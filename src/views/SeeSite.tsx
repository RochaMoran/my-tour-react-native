import React from "react";
import { Picker, ScrollView, Text, View } from "react-native";
import HeaderHome from "../components/organims/headerHome";
import fakeSites from "../fakeSites";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/SeeSite";
import { styles as stylesLogin } from "../styles/Login";
import MapCreateSite from "../components/moleculs/mapCreateSite";

export default function SeeSite({ route }: any) {
  const { id } = route.params;
  const site = fakeSites.find((element) => element.id === id);

  return (
    <View style={[globalStyles.container]}>
      <HeaderHome
        stylesHeader={styles}
        imgUrl={site?.imgUrl}
        title={site?.name}
        subTitle={site?.openTimes + "-" + site?.closeTimes}
      />
      <ScrollView style={styles.body}>
        <Text style={stylesLogin.labelLogin}>Nombre del sitio</Text>
        <Text>{site?.name}</Text>
        <Text style={stylesLogin.labelLogin}>Pais del sitio</Text>
        <Text>{site?.country}</Text>
        <Text style={stylesLogin.labelLogin}>Horarios: </Text>
        <Text>{site?.openTimes} - {site?.closeTimes}</Text>
        <Text style={stylesLogin.labelLogin}>Covid Medidas: </Text>
        <Text>Abierto: {site?.statusOpen ? "Sí" : "No"}</Text>
        <Text>Mascarilla: {site?.faceMask ? "Sí" : "No"}</Text>
        <Text>Vacuna: {site?.vaccineCovid ? "Sí" : "No"}</Text>
        <MapCreateSite />
      </ScrollView>
    </View>
  );
}
