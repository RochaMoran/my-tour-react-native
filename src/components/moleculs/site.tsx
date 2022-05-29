import { View, Text, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../styles/Home";
import Icon from 'react-native-vector-icons/FontAwesome'
import { appState } from "../../helpers/const/appState";
import { Link } from "@react-navigation/native";

export default function Site ({id, name, country, imgUrl, type }:appState["interfaceSiteHome"]) {
    return (
      <Link to={{screen: 'SeeSite', params: {id: id}}} style={{marginRight: 10}}>
        <View style={type === "lg" ? styles.lgCard : styles.highCard}>
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
        </View>
      </Link>
    )
}