import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import TextErrorForm from "../components/atoms/textErrorForm";
import { verifiedCode } from "../helpers/funtions/petitions";
import useField from "../hooks/useField";
import { styles } from "../styles/VerifiedAccount"

export default function VerifiedAccount ({route}:any) {
    const { email } = route.params;
    const [form, setForm] = useState<any>({
        email: {
          value: email,
          error: "",
        },
        code: {
          value: "",
          error: "",
        },
        error: ""
      });
    const paramAuth = {
        validated: form.error || !form.email.value || !form.code.value,
        peticionFunction: verifiedCode,
        url: "users/verified"
    };
    const { handleCode, handleVerifiedSubmit } = useField(form, setForm)

    return (
        <View style={styles.verifiedContainer}>
            <View style={styles.verifiedHeader}>
                <Image style={styles.verifiedHeaderImage} source={require("../assets/logo.png")}/>
            </View>
            <View style={styles.verifiedBody}>
                <Text style={styles.verifiedTitleBody}>Verificar codigo</Text>
                <Text style={styles.verifiedTextBody}>Ingresa el codigo de 6 o 5 digitos que recibiste en tu email</Text>
                <TextInput keyboardType="numeric" style={styles.verifiedInputBody} placeholder="******" onChangeText={(value) => handleCode(value)}/>
                <TextErrorForm cls={{textAlign: "center", marginVertical: 5}} error={form.code.error || form.email.error || form.error}/>
                <TouchableOpacity style={styles.verifiedButtonBody} onPress={() => handleVerifiedSubmit(paramAuth)}>
                    <Text style={styles.verifiedTextButtonBody}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}