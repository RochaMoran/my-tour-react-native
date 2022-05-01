import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/Login";
import { Link } from "@react-navigation/native";
import useUser from "../hooks/useUser";
import HeaderView from "../components/atoms/headerView";

export default function Login() {
  const { login } = useUser();

  return (
    <View style={[globalStyles.container, styles.container]}>
      <HeaderView title="Iniciar Sesión" />
      <View style={styles.loginBody}>
        <Text style={styles.loginBodyTitle}>Bienvenido De nuevo</Text>
        <View style={styles.formLogin}>
          <Text style={styles.labelLogin}>Correo Electronico</Text>
          <TextInput
            style={styles.inputLogin}
            placeholder="Ejemplo: usuario@gmail.com"
            autoCapitalize="none"
            autoCompleteType="off"
            keyboardType="email-address"
          />
          <Text style={styles.labelLogin}>Contraseña</Text>
          <TextInput
            style={styles.inputLogin}
            placeholder="Ingrese su contraseña"
            autoCapitalize="none"
            autoCompleteType="off"
            secureTextEntry={true}
          />
          <Text style={styles.forgetPassword}>Olvidaste tu contraseña?</Text>
          <TouchableOpacity
            style={[globalStyles.button, styles.buttonLogin]}
            onPress={() => login()}
          >
            <Text style={styles.textButtonLogin}>Iniciar Sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[globalStyles.button, styles.buttonLoginGoogle]}
          >
            <Text style={styles.textButtonLoginGoogle}>Iniciar con google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.doNotHaveAccount}>
          <Text style={styles.doNotHaveAccountText}>
            ¿No tienes una cuenta?
          </Text>
          <Link to={{ screen: "Register" }} style={styles.registerLink}>
            Registrate
          </Link>
        </View>
      </View>
    </View>
  );
}
