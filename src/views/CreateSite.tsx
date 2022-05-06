import {
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import HeaderView from "../components/atoms/headerView";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/CreateSite";
import { styles as stylesLogin } from "../styles/Login";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import MapCreateSite from "../components/moleculs/mapCreateSite";
import useTime from "../hooks/useTime";
import { appState } from "../helpers/const/appState";
import SwitchControl from "../components/atoms/switchControl";
import TimeControl from "../components/atoms/timeControl";
import TimePicker from "../components/atoms/timePicker";

export default function CreateSite() {
  const [site, setSite] = useState<appState["interfaceSiteCreate"]>({
    name: "",
    imgUrl: "",
    country: "",
    vaccineCovid: false,
    faceMask: false,
    statusOpen: false,
    openTimes: "",
    closeTimes: "",
  });
  const { updateOpen, updateClose, updateShow, show } = useTime(site, setSite);

  return (
    <View style={[globalStyles.container, styles.container]}>
      <HeaderView title="Crear Sitio" create={true} />
      <View style={styles.bodyCreateSite}>
        <ScrollView>
          <Text style={stylesLogin.labelLogin}>Nombre del sitio</Text>
          <TextInput
            style={stylesLogin.inputLogin}
            placeholder="Ejemplo: Río San juan"
            autoCapitalize="none"
            autoCompleteType="off"
          />
          <View style={[styles.pickerCountry, styles.borderItemForm]}>
            <Picker mode="dropdown">
              <Picker.Item label="País" />
              <Picker.Item label="Peru" value="java" />
              <Picker.Item label="Nicaragua" value="js" />
            </Picker>
          </View>
          <SwitchControl name="vaccineCovid" site={site} setSite={setSite} title="Vacuna Covid" conditional={site.vaccineCovid} />
          <SwitchControl name="faceMask" site={site} setSite={setSite} title="Cubrebocas" conditional={site.faceMask}/>
          <SwitchControl name="statusOpen" site={site} setSite={setSite} title="Estado Apertura" conditional={site.statusOpen} />
          <TimeControl title="Horarios Apertura" onPress={() => updateShow(false, true)}/>
          <TimeControl title="Horarios Cierre" onPress={() => updateShow(true, false)}/>
          <MapCreateSite />
        </ScrollView>
        <TimePicker show={show} updateClose={updateClose} updateOpen={updateOpen} />
      </View>
    </View>
  );
}
