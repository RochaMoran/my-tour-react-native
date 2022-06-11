import React from "react";
import { Picker, ScrollView, Text, View } from "react-native";
import HeaderHome from "../components/organims/headerHome";
import fakeSites from "../fakeSites";
import { colors, globalStyles } from "../styles/global";
import { styles } from "../styles/SeeSite";
import { styles as stylesLogin } from "../styles/Login";
import MapCreateSite from "../components/moleculs/mapCreateSite";
import getData from "../hooks/getData";
import Icon from 'react-native-vector-icons/Entypo'
import truncateText from "../helpers/funtions/truncateText";

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
              addStyles={{title: styles.title, subtitle: styles.subtitle}}
            >
              <View style={styles.likes}>
                <Text style={{fontWeight: "bold", color: "black", fontSize: 16}}>2.3</Text>
                <Icon name="heart" color="red" size={20} style={{marginLeft: 5}}/>
              </View>
            </HeaderHome>
            <ScrollView style={styles.body}>
              <Text style={stylesLogin.labelLogin}>Descripcion</Text>
              <Text>{data.site?.description}</Text>
              <View style={styles.containerLocation}>
                <Icon name="location-pin" color={colors.primary} size={20} style={{marginRight: 2}} />
                <Text style={{fontWeight: "bold", color: colors.primary, fontSize: 16, textTransform: "uppercase"}}>{truncateText(data.site?.country)}</Text>
              </View>
              <View>
                <Text style={stylesLogin.labelLogin}>Covid Medidas: </Text>
                <Text>Abierto: {data.site?.covidMeasures.statusOpen ? "Sí" : "No"}</Text>
                <Text>Mascarilla: {data.site?.covidMeasures.faceMask ? "Sí" : "No"}</Text>
                <Text>Vacuna: {data.site?.covidMeasures.vaccineCovid ? "Sí" : "No"}</Text>
              </View>
              <MapCreateSite location={data.site.location} />
            </ScrollView>
          </>
        )
      }
    </View>
  );
}
