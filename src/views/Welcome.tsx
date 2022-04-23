import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Link } from "@react-navigation/native";
import { styles } from "../styles/Welcome";
import { globalStyles } from "../styles/global";

export default function Welcome({navigation}:any) {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Image
        style={styles.imageWelcome}
        source={require("../assets/welcome-image.png")}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.titleWelcome}>Bienvenido</Text>
        <Text style={styles.subtitleExperience}>
          Disfruta de la mejor experiencia
        </Text>
        <Text style={styles.subtitleDinamic}>Intuitivo y Dinamico</Text>
        <TouchableOpacity
          style={[globalStyles.button, styles.buttonGoogle]}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonGoogleText}>Iniciar con google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.button, styles.buttonCreateAccount]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonCreateAccountText}>Crear Cuenta</Text>
        </TouchableOpacity>
        <Text style={styles.linkAlreadyAccount}>
          Ya tienes una cuenta?{" "}
          <Link style={styles.linkLogin} to={{ screen: "Login" }}>
            Iniciar Sesión
          </Link>
        </Text>
      </View>
    </View>
  );
}
