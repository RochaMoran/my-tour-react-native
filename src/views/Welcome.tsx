import { View, Text, Image, TouchableOpacity } from "react-native";
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
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonGoogleText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.button, styles.buttonCreateAccount]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonCreateAccountText}>Crear Cuenta</Text>
        </TouchableOpacity>
        <Text style={styles.linkAlreadyAccount}>
          ve y pasea por el mundo
        </Text>
      </View>
    </View>
  );
}
