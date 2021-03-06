import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { appState } from "../../helpers/const/appState";
import SwitchControl from "../atoms/switchControl";
import TimeControl from "../atoms/timeControl";
import TimePicker from "../atoms/timePicker";
import useLocation from "../../hooks/useLocation";
import useSite from "../../hooks/useSite";
import TextErrorForm from "../atoms/textErrorForm";
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import HeaderView from "../atoms/headerView";
import { globalStyles } from "../../styles/global";
import { styles } from "../../styles/CreateSite";
import { styles as stylesLogin } from "../../styles/Login";
import MapCreateSite from "../moleculs/mapCreateSite";
import useTime from "../../hooks/useTime";

export default function UpdateOrCreateSite ({siteParam, title}:any) {
    const paramSite = siteParam || null
    const { countries, site, updateAttributteSite, handleSubmitSite, uploadImage, location, updateCoordinates } = useSite(paramSite);
  const { updateOpen, updateClose, updateShow, show } = useTime(site, updateAttributteSite);

  return (
    <View style={[globalStyles.container, styles.container]}>
      <HeaderView title={title} create={true} action={uploadImage} image={site.image.value.uri} />
      <View style={styles.bodyCreateSite}>
        <TextErrorForm error={site.image.error}/>
        <ScrollView>
          <Text style={[stylesLogin.labelLogin, styles.labelCreateSite]}>Nombre del sitio</Text>
          <TextInput
            style={[stylesLogin.inputLogin, styles.inputCreateSite]}
            placeholder="Ejemplo: Río San juan"
            autoCompleteType="off"
            defaultValue={site.name.value}
            onChangeText={text => updateAttributteSite("name", text)}
          />
          <TextErrorForm error={site.name.error}/>
          <Text style={[stylesLogin.labelLogin, styles.labelCreateSite]}>Describa su sitio</Text>
          <TextInput
            style={[stylesLogin.inputLogin, styles.inputCreateSite]}
            placeholder="Ejemplo: un lugar para los niños, atractivo y turístico"
            autoCompleteType="off"
            multiline
            numberOfLines={2}
            defaultValue={site.description.value}
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
            value={site.openTimes.value}
            onPress={() => updateShow(false, true)}
          />
          <TextErrorForm error={site.openTimes.error}/>
          <TimeControl
            title="Horarios Cierre"
            value={site.closeTimes.value}
            onPress={() => updateShow(true, false)}
          />
          <TextErrorForm error={site.closeTimes.error}/>
          <MapCreateSite update={updateCoordinates} location={location} />
        <TouchableOpacity style={styles.buttonSend} onPress={handleSubmitSite}>
          <Text style={{color: "white", marginRight: 10}}>Enviar</Text>
          <IconFontAwesome name="send" color="white" size={15} />
        </TouchableOpacity>
        </ScrollView>
        <TimePicker
          show={show}
          updateShow={updateShow}
          updateClose={updateClose}
          updateOpen={updateOpen}
        />
      </View>
    </View>
  );
}