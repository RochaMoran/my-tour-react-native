import { View, Text, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../styles/Home";
import Icon from 'react-native-vector-icons/FontAwesome'
import { appState } from "../../helpers/const/appState";

export default function Site ({id, redirectSite, name, country, imgUrl, type }:appState["interfaceSiteHome"]) {
    return (
        <TouchableOpacity style={type === "lg" ? styles.lgCard : styles.highCard} onPress={() => redirectSite.navigate('SeeSite', {
          id: 1
        })}>
        <ImageBackground source={{
          uri: imgUrl
          
        }} style={type === "lg" ? styles.lgCardImage : styles.highCardImage} >
          <TouchableOpacity style={styles.likeButton} onPress={() => Alert.alert("Sitio añadido a favorito")}>
            <Icon
                name="heart-o"
                size={20}
                color="white"
            />
          </TouchableOpacity>
          <View style={styles.lgCardSiteContainer}>
            <Text style={styles.lgCardSite}>{name}</Text>
            <Text style={styles.lgCardUbication}>{country}</Text>
          </View>
        </ ImageBackground>
      </TouchableOpacity>
    )
}