import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
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
import useLocation from "../hooks/useLocation";
import useCreateSite from "../hooks/useCreateSite";
import TextErrorForm from "../components/atoms/textErrorForm";

export default function CreateSite() {
  const { countries, site, updateAttributteSite, handleSubmitSite, uploadImage, location, updateCoordinates } = useCreateSite();
  const { updateOpen, updateClose, updateShow, show } = useTime(site, updateAttributteSite);

  return (
    <View style={[globalStyles.container, styles.container]}>
      <HeaderView title="Crear Sitio" create={true} action={uploadImage} image={site.image.value.uri} />
      <View style={styles.bodyCreateSite}>
        <TextErrorForm error={site.image.error}/>
        <ScrollView>
          <Text style={[stylesLogin.labelLogin, styles.labelCreateSite]}>Nombre del sitio</Text>
          <TextInput
            style={[stylesLogin.inputLogin, styles.inputCreateSite]}
            placeholder="Ejemplo: Río San juan"
            autoCapitalize="none"
            autoCompleteType="off"
            onChangeText={text => updateAttributteSite("name", text)}
          />
          <TextErrorForm error={site.name.error}/>
          <Text style={[stylesLogin.labelLogin, styles.labelCreateSite]}>Describa su sitio</Text>
          <TextInput
            style={[stylesLogin.inputLogin, styles.inputCreateSite]}
            placeholder="Ejemplo: un lugar para los niños, atractivo y turístico"
            autoCapitalize="none"
            autoCompleteType="off"
            multiline
            numberOfLines={2}
            onChangeText={text => updateAttributteSite("description", text)}
          />
          <TextErrorForm error={site.description.error}/>
          <View style={[styles.pickerCountry, styles.borderItemForm]}>
            <Picker mode="dropdown" selectedValue={site.country.value} onValueChange={(text) => updateAttributteSite("country", text)}>
              {countries &&
                countries.map((country: any, i: number) => (
                  <Picker.Item value={country.name.common} label={country.name.common} key={i} />
                ))}
            </Picker>
            <TextErrorForm error={site.country.error}/>
          </View>
          <SwitchControl
            name="vaccineCovid"
            site={site}
            setSite={updateAttributteSite}
            title="Vacuna Covid"
            conditional={site.vaccineCovid.value}
          />
          <SwitchControl
            name="faceMask"
            site={site}
            setSite={updateAttributteSite}
            title="Cubrebocas"
            conditional={site.faceMask.value}
          />
          <SwitchControl
            name="statusOpen"
            site={site}
            setSite={updateAttributteSite}
            title="Estado Apertura"
            conditional={site.statusOpen.value}
          />
          <TimeControl
            title="Horarios Apertura"
            onPress={() => updateShow(false, true)}
          />
          <TextErrorForm error={site.openTimes.error}/>
          <TimeControl
            title="Horarios Cierre"
            onPress={() => updateShow(true, false)}
          />
          <TextErrorForm error={site.closeTimes.error}/>
          <MapCreateSite update={updateCoordinates} location={location} />
        <TouchableOpacity style={styles.buttonSend} onPress={handleSubmitSite}>
          <Text style={{color: "white"}}>Enviar</Text>
        </TouchableOpacity>
        </ScrollView>
        <TimePicker
          show={show}
          updateClose={updateClose}
          updateOpen={updateOpen}
        />
      </View>
    </View>
  );
}
