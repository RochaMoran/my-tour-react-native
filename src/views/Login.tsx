import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/global";
import { styles } from "../styles/Login";
import Svg, { Path } from 'react-native-svg';
import { Link } from "@react-navigation/native";

export default function Login () {
    return (
        <View style={[globalStyles.container, styles.container]}>
            <View style={styles.loginHeader}>
                <Text style={styles.loginHeaderTitle}>Iniciar Sesión</Text>
                <Svg style={styles.loginHeaderWave} viewBox="0 0 1440 320">
                    <Path fill="#2da14c" fillOpacity="0.4" d="M0,224L34.3,229.3C68.6,235,137,245,206,224C274.3,203,343,149,411,138.7C480,128,549,160,617,154.7C685.7,149,754,107,823,96C891.4,85,960,107,1029,101.3C1097.1,96,1166,64,1234,69.3C1302.9,75,1371,117,1406,138.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                </Svg>
                <Svg style={[styles.loginHeaderWave, styles.loginHeaderWave2]} viewBox="0 0 1440 320">
                    <Path fill="#2da14c" fillOpacity="0.8" d="M0,224L34.3,229.3C68.6,235,137,245,206,224C274.3,203,343,149,411,138.7C480,128,549,160,617,154.7C685.7,149,754,107,823,96C891.4,85,960,107,1029,101.3C1097.1,96,1166,64,1234,69.3C1302.9,75,1371,117,1406,138.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                </Svg>
            </View>
            <View style={styles.loginBody}>
                <Text style={styles.loginBodyTitle}>Bienvenido De nuevo</Text>
                <View style={styles.formLogin}>
                    <Text style={styles.labelLogin}>Correo Electronico</Text>
                    <TextInput style={styles.inputLogin} placeholder="Ejemplo: usuario@gmail.com" autoCapitalize="none" autoCompleteType="off" keyboardType="email-address" />
                    <Text style={styles.labelLogin}>Contraseña</Text>
                    <TextInput style={styles.inputLogin} placeholder="Ingrese su contraseña" autoCapitalize="none" autoCompleteType="off" secureTextEntry={true} />
                    <Text style={styles.forgetPassword}>Olvidaste tu contraseña?</Text>
                    <TouchableOpacity style={[globalStyles.button, styles.buttonLogin]}>
                        <Text style={styles.textButtonLogin}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.button, styles.buttonLoginGoogle]}>
                        <Text style={styles.textButtonLoginGoogle}>Iniciar con google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.doNotHaveAccount}>
                    <Text style={styles.doNotHaveAccountText}>
                        ¿No tienes una cuenta?
                    </Text>
                    <Link to={{screen:"Register"}} style={styles.registerLink}>
                        Registrate
                    </Link>
                </View>
            </View>
        </View>
    )
}