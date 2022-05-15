import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/Login";
import { Link } from "@react-navigation/native";
import useUser from "../hooks/useUser";
import HeaderView from "../components/atoms/headerView";
import useField from "../hooks/useField";
import TextErrorForm from '../components/atoms/textErrorForm';

export default function Login() {
  const { login } = useUser();
  const [form, setForm] = useState<any>({
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    },
    error: ''
  })
  const { handleInput, handleSubmit } = useField(form, setForm)

  return (
    <View style={[globalStyles.container, styles.container]}>
      <HeaderView title="Iniciar Sesión" />
      <View style={styles.loginBody}>
        <Text style={styles.loginBodyTitle}>Bienvenido De nuevo</Text>
        <View style={styles.formLogin}>
          <Text style={styles.labelLogin}>Correo Electronico</Text>
          <TextInput
            style={form.email.error ? [styles.inputLogin, styles.inputLoginError] : styles.inputLogin}
            placeholder="Ejemplo: usuario@gmail.com"
            autoCapitalize="none"
            autoCompleteType="off"
            keyboardType="email-address"
            onChangeText={(value) => handleInput('email', value)}
          />
          <TextErrorForm error={form.email.error} />
          <Text style={styles.labelLogin}>Contraseña</Text>
          <TextInput
            style={form.password.error ? [styles.inputLogin, styles.inputLoginError] : styles.inputLogin}
            placeholder="Ingrese su contraseña"
            autoCapitalize="none"
            autoCompleteType="off"
            secureTextEntry={true}
            onChangeText={(value) => handleInput('password', value)}
          />
          <TextErrorForm error={form.password.error} />
          <Text style={styles.forgetPassword}>Olvidaste tu contraseña?</Text>
          <TextErrorForm cls={styles.centerMessageError} error={form.error} />
          <TouchableOpacity
            style={[globalStyles.button, styles.buttonLogin]}
            onPress={() => handleSubmit((form.error || (!form.email.value || !form.password.value)))}
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
