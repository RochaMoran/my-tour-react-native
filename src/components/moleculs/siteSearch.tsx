import React from 'react'
import { View, Image, Text } from 'react-native'
import { styles } from '../../styles/Search'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconF from 'react-native-vector-icons/Fontisto'

export default function SiteSearch ({site}:any) {
    return (
        <View style={styles.siteResult}>
          <Image
            style={styles.siteResultImage}
            source={{
              uri: site.imgUrl,
            }}
          />
          <View>
            <View style={styles.containerBasicInfo}>
              <Text style={styles.titleItemSite}>{site.name}</Text>
              <Text style={styles.siteItemText}>{site.country}</Text>
            </View>
            <View style={styles.containerCovidInfo}>
              <Text style={styles.titleItemSite}>Covid Medidas</Text>
              <View style={styles.covidItem}>
                <IconFA5 name="head-side-mask" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText, styles.statusObligatory]}>{site.vaccineCovid ? "Obligatorio" : "Opcional"}</Text>
              </View>
              <View style={styles.covidItem}>
                <IconF name="injection-syringe" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText, styles.statusOptional]}>{site.faceMask ? "Obligatorio" : "Opcional"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerStatusInfo}>
            <Text style={styles.titleItemSite}>Estado Apertura</Text>
            <Text style={[styles.siteItemText, styles.siteStatusOpen]}>{site.statusOpen ? "Abierto" : "Cerrado"}</Text>
            <Text style={styles.titleItemSite}>Horarios:</Text>
            <Text style={styles.siteItemText}>Abre: {site.openTimes}</Text>
            <Text style={styles.siteItemText}>Cierra: {site.closeTimes}</Text>
          </View>
        </View>
    )
}