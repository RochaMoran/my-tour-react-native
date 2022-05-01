import { View, Text, ScrollView, TextInput, Switch, TouchableOpacity, } from "react-native";
import HeaderView from "../components/atoms/headerView";
import { colors, globalStyles } from "../styles/global";
import { styles } from "../styles/CreateSite";
import { styles as stylesLogin } from "../styles/Login";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons'

export default function CreateSite() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

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
              thumbColor={isEnabled ? "#25592a" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setIsEnabled}
              value={isEnabled}
            />
          </View>
          <View style={[styles.vacuneContainer, styles.openSite, styles.borderItemForm]}>
            <Text style={styles.vacuneText}>Horarios Apertura</Text>
            <TouchableOpacity onPress={() => setIsShow(true)}>
              <Icon name="time-outline" size={25} color="#888" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
