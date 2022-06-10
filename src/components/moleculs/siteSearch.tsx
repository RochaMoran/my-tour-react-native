import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/Search";
import IconFA5 from "react-native-vector-icons/FontAwesome5";
import IconF from "react-native-vector-icons/Fontisto";
import IconA from "react-native-vector-icons/AntDesign";
import { appState } from "../../helpers/const/appState";
import truncateText from "../../helpers/funtions/truncateText";
import { Link } from "@react-navigation/native";
import ModalMessage from "./modalMessage";
import { colors } from "../../styles/global";

export default function SiteSearch({ site, mySites, navigation }: any) {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  function deleteSite() {
    setIsModalShow(true);
  }

  return (
    <View style={styles.containerSiteResult}>
      {site && (
        <Link to={{ screen: "SeeSite", params: { id: site._id } }}>
          <View style={styles.siteResult}>
            <Image
              style={styles.siteResultImage}
              source={{
                uri: site.imgUrl,
              }}
            />
            <View>
              <View style={styles.containerBasicInfo}>
                <Text style={styles.titleItemSite}>
                  {truncateText(site.name)}
                </Text>
                <Text style={styles.siteItemText}>
                  {truncateText(site.country)}
                </Text>
              </View>
              <View style={styles.containerCovidInfo}>
                <Text style={styles.titleItemSite}>Covid Medidas</Text>
                <View style={styles.covidItem}>
                  <IconFA5 name="head-side-mask" color="#5e5e5e" size={15} />
                  <Text
                    style={[
                      styles.covidItemTex,
                      styles.siteItemText,
                      site.covidMeasures.vaccineCovid
                        ? styles.statusObligatory
                        : styles.statusOptional,
                    ]}
                  >
                    {site.covidMeasures.vaccineCovid
                      ? "Obligatorio"
                      : "Opcional"}
                  </Text>
                </View>
                <View style={styles.covidItem}>
                  <IconF name="injection-syringe" color="#5e5e5e" size={15} />
                  <Text
                    style={[
                      styles.covidItemTex,
                      styles.siteItemText,
                      site.covidMeasures.faceMask
                        ? styles.statusObligatory
                        : styles.statusOptional,
                    ]}
                  >
                    {site.covidMeasures.faceMask ? "Obligatorio" : "Opcional"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.containerStatusInfo}>
              <Text style={styles.titleItemSite}>Estado Apertura</Text>
              <Text
                style={[
                  styles.siteItemText,
                  site.covidMeasures.statusOpen
                    ? styles.siteStatusOpen
                    : styles.siteStatusClose,
                ]}
              >
                {site.covidMeasures.statusOpen ? "Abierto" : "Cerrado"}
              </Text>
              <Text style={styles.titleItemSite}>Horarios:</Text>
              <Text style={styles.siteItemText}>
                Abre: {site.attentionSchedules.open}
              </Text>
              <Text style={styles.siteItemText}>
                Cierra: {site.attentionSchedules.close}
              </Text>
            </View>
          </View>
        </Link>
      )}
      {mySites && (
        <View style={styles.containerActions}>
          <TouchableOpacity
            style={[styles.actionsItem, styles.actionsDelete]}
            onPress={deleteSite}
          >
            <IconA name="delete" size={18} color={colors.primary} />
            <Text
              style={[styles.actionsTextColor, styles.actionsTextColorPrimary]}
            >
              Eliminar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionsItem, styles.actionsEdit]}
            onPress={() =>
              navigation.navigate("UpdateSite", { siteParam: site })
            }
          >
            <IconFA5 name="edit" size={16} color="white" />
            <Text
              style={[
                styles.actionsTextColor,
                styles.actionsTextColorSecondary,
              ]}
            >
              Editar
            </Text>
          </TouchableOpacity>
          <ModalMessage
            isModalShow={isModalShow}
            setIsModalShow={setIsModalShow}
            id={site._id}
          />
        </View>
      )}
    </View>
  );
}
