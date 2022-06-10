import React from "react";
import { Picker, ScrollView, Text, View } from "react-native";
import HeaderHome from "../components/organims/headerHome";
import fakeSites from "../fakeSites";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/SeeSite";
import { styles as stylesLogin } from "../styles/Login";
import MapCreateSite from "../components/moleculs/mapCreateSite";
import getData from "../hooks/getData";

export default function SeeSite({ route }: any) {
  const { id } = route.params;
  const { data } = getData(`sites/${id}`)

  return (
    <View style={[globalStyles.container]}>
      {
        data && (
          <>
            <HeaderHome
              stylesHeader={styles}
              imgUrl={data.site?.imgUrl}
              title={data.site?.name}
              subTitle={data.site?.attentionSchedules.open + "-" + data.site?.attentionSchedules.close}
            />
            <ScrollView style={styles.body}>
              <Text style={stylesLogin.labelLogin}>Nombre del sitio</Text>
              <Text>{data.site?.name}</Text>
              <Text style={stylesLogin.labelLogin}>Pais del sitio</Text>
              <Text>{data.site?.country}</Text>
              <Text style={stylesLogin.labelLogin}>Horarios: </Text>
              <Text>{data.site?.attentionSchedules.open} - {data.site?.attentionSchedules.close}</Text>
              <Text style={stylesLogin.labelLogin}>Covid Medidas: </Text>
              <Text>Abierto: {data.site?.covidMeasures.statusOpen ? "Sí" : "No"}</Text>
              <Text>Mascarilla: {data.site?.covidMeasures.faceMask ? "Sí" : "No"}</Text>
              <Text>Vacuna: {data.site?.covidMeasures.vaccineCovid ? "Sí" : "No"}</Text>
              <MapCreateSite location={data.site.location} />
            </ScrollView>
          </>
        )
      }
    </View>
  );
}
