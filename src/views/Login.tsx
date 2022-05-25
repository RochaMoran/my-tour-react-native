import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/Login";
import { Link } from "@react-navigation/native";
import HeaderView from "../components/atoms/headerView";
import useField from "../hooks/useField";
import TextErrorForm from '../components/atoms/textErrorForm';
import { postUser } from '../helpers/funtions/petitions';

export default function Login({navigation}:any) {
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
  const { handleInput, handleLoginSubmit } = useField(form, setForm)
  const paramAuth = {
    validated: (form.error || (!form.email.value || !form.password.value)), 
    peticionFunction: postUser, 
    url: 'users/login'
  }

  const signInWithGoogle = async () => {
   
  }

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
          <View style={styles.loginErrorContainer}>
            <TextErrorForm cls={styles.centerMessageError} error={form.error} />
            {form.error === 'Aun no has verificado tu cuenta' && <TouchableOpacity style={styles.verifiedLoginButton} onPress={() => navigation.navigate("VerifiedAccount", {email: form.email.value})}>
                <Text style={styles.verifiedLoginButtonText}>Verificar</Text>
              </TouchableOpacity>}
          </View>
          <TouchableOpacity
            style={[globalStyles.button, styles.buttonLogin]}
            onPress={() => handleLoginSubmit(paramAuth)}
          >
            <Text style={styles.textButtonLogin}>Iniciar Sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[globalStyles.button, styles.buttonLoginGoogle]}
            onPress={signInWithGoogle}
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
