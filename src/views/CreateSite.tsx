import { View, Text, ScrollView, TextInput, Switch, TouchableOpacity, Platform, } from "react-native";
import HeaderView from "../components/atoms/headerView";
import { colors, globalStyles } from "../styles/global";
import { styles } from "../styles/CreateSite";
import { styles as stylesLogin } from "../styles/Login";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import DateTimePicker from '@react-native-community/datetimepicker';

interface interfaceSite {
  name?: string,
  country?: string,
  vaccineCovid?: boolean,
  faceMask?: boolean,
  statusOpen?: boolean,
  openTimes?: string,
  closeTimes?: string
}

interface interfaceShow {
  open: boolean,
  close: boolean
}

export default function CreateSite() {
  const [site, setSite] = useState<interfaceSite>()
  const [show, setShow] = useState<interfaceShow>();

  const updateOpen = (event:any, value:any) => {
    updateDate(event, value, "openTimes")
  };
  
  const updateClose = (event:any, value:any) => {
    updateDate(event, value, "closeTimes")
  };

  const updateDate = (event:any, value:any, type: string) => {
    if (Platform.OS === 'android') {
      setShow({
        open: false,
        close: false
      });

      setSite({
        ...site,
        [type]: value
      })
    }
  }

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
          <View style={[styles.vacuneContainer, styles.borderItemForm]}>
            <Text style={styles.vacuneText}>Vacuna Covid</Text>
            <Switch
              style={styles.vacuneSwitch}
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor={site?.vaccineCovid ? "#25592a" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setSite({...site, vaccineCovid: !site?.vaccineCovid})}
              value={site?.vaccineCovid}
            />
          </View>
          <View style={[styles.vacuneContainer, styles.borderItemForm]}>
            <Text style={styles.vacuneText}>Cubrebocas</Text>
            <Switch
              style={styles.vacuneSwitch}
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor={site?.faceMask ? "#25592a" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setSite({...site, faceMask: !site?.faceMask})}
              value={site?.faceMask}
            />
          </View>
          <View style={[styles.vacuneContainer, styles.borderItemForm]}>
            <Text style={styles.vacuneText}>Estado Apertura</Text>
            <Switch
              style={styles.vacuneSwitch}
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor={site?.statusOpen ? "#25592a" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setSite({...site, statusOpen: !site?.statusOpen})}
              value={site?.statusOpen}
            />
          </View>
          <View style={[styles.vacuneContainer, styles.openSite, styles.borderItemForm]}>
            <Text style={styles.vacuneText}>Horarios Apertura</Text>
            <TouchableOpacity onPress={() => setShow({close: false, open:true})}>
              <Icon name="time-outline" size={25} color="#888" />
            </TouchableOpacity>
          </View>
          <View style={[styles.vacuneContainer, styles.openSite, styles.borderItemForm]}>
            <Text style={styles.vacuneText}>Horarios Cierre</Text>
            <TouchableOpacity onPress={() => setShow({close: true, open:false})}>
              <Icon name="time-outline" size={25} color="#888" />
            </TouchableOpacity>
          </View>
        </ScrollView>
            {
              (show?.open || show?.close) && <DateTimePicker
              value={new Date()}
              onChange={show.open ? updateOpen : updateClose}
              mode={'time'}
              is24Hour={true}
            />
            }         
      </View>
    </View>
  );
}
