import { View, Text, ImageBackground } from "react-native";
import { styles } from "../../styles/Home";

export default function HeaderHome () {
    return (
        <View style={styles.header}>
        <ImageBackground source={{
          uri: "http://c.files.bbci.co.uk/E02E/production/_102809375_machu.jpg"
          
        }} blurRadius={1} style={styles.headerImage}>
          <Text style={styles.headerTitle}>Pasea por el mundo...</Text>
          <Text style={styles.headerContent}>El viajero ve lo que ve, el turista ve lo que ha venido a ver</Text>
        </ ImageBackground>
      </View>
    )
}