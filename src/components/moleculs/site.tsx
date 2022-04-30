import { View, Text, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../styles/Home";
import Icon from 'react-native-vector-icons/FontAwesome'

interface interfaceSite {
    site: string,
    uri: string,
    type: string,
    country: string
}

export default function Site ({site, country, uri, type }:interfaceSite) {
    return (
        <View style={type === "lg" ? styles.lgCard : styles.highCard}>
        <ImageBackground source={{
          uri: uri
          
        }} style={type === "lg" ? styles.lgCardImage : styles.highCardImage} >
          <TouchableOpacity style={styles.likeButton} onPress={() => Alert.alert("Sitio añadido a favorito")}>
            <Icon
                name="heart-o"
                size={20}
                color="white"
            />
          </TouchableOpacity>
          <View style={styles.lgCardSiteContainer}>
            <Text style={styles.lgCardSite}>{site}</Text>
            <Text style={styles.lgCardUbication}>{country}</Text>
          </View>
        </ ImageBackground>
      </View>
    )
}