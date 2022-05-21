import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/Login";
import { Link } from "@react-navigation/native";
import useUser from "../hooks/useUser";
import HeaderView from "../components/atoms/headerView";

export default function Profile() {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <HeaderView title="Editar Perfil" />
      <View style={styles.loginBody}>
        <Text style={styles.loginBodyTitle}>Rellene los campos</Text>
        <View style={styles.formLogin}>
          <Text style={styles.labelLogin}>Correo Electronico</Text>
          <TextInput
            style={styles.inputLogin}
            placeholder="Ejemplo: usuario@gmail.com"
            autoCapitalize="none"
            autoCompleteType="off"
            keyboardType="email-address"
            value="rochamoran1@gmail.com"
          />
          <Text style={styles.labelLogin}>Contraseña</Text>
          <TextInput
            style={styles.inputLogin}
            placeholder="Ingrese su contraseña"
            autoCapitalize="none"
            autoCompleteType="off"
            secureTextEntry={true}
            value="fkljsdfsdfs"
          />
          <Text style={styles.labelLogin}>Confirmar contraseña</Text>
          <TextInput
            style={styles.inputLogin}
            placeholder="Ingrese nuevamente su contraseña"
            autoCapitalize="none"
            autoCompleteType="off"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={[globalStyles.button, styles.buttonLogin]}
          >
            <Text style={styles.textButtonLogin}>Guardar Cambios</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[globalStyles.button, styles.buttonLogOut]}
          >
            <Text style={styles.textButtonLogin}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
