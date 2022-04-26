import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        position: "relative"
    },
    loginHeader: {
        backgroundColor: colors.primary,
        height: "20%",
    },
    loginHeaderTitle: {
        marginHorizontal: 20,
        fontWeight: "bold",
        fontSize: 30,
        color: "white",
        marginTop: 25,
        zIndex: 5
    },
    loginHeaderWave: {
        position: "absolute",
        top: 30
    },
    loginHeaderWave2: {
        top: 55
    },
    loginBody: {
        height: "80%",
        backgroundColor: "white",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 30,
        paddingHorizontal: 20
    },
    loginBodyTitle: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold"
    },
    formLogin: {
        marginTop: 15
    },
    labelLogin: {
        marginVertical: 5,
        fontWeight: "bold",
        color: "#454545",
        fontSize: 15
    },
    inputLogin: {
        borderBottomWidth: 1,
        paddingVertical: 5,
        borderBottomColor: "rgba(112, 112, 112, .6)",
        fontSize: 15
    },
    forgetPassword: {
        color: colors.primary,
        fontWeight: "bold",
        textAlign: "center",
        margin: 25
    },
    buttonLogin: {
        backgroundColor: colors.primary,
    },
    buttonLoginGoogle: {
        borderWidth: 2,
        borderColor: colors.primary
    },
    textButtonLogin: {
        color: "white",
        fontWeight: "bold"
    },
    textButtonLoginGoogle: {
        fontWeight: "bold",
        color: colors.primary
    },
    doNotHaveAccount: {
        alignItems: "center",
        position: "absolute",
        bottom: 15,
        width: "100%",
        left: 20
    },
    doNotHaveAccountText: {
        width: "100%",
        textAlign: "center",
        color: "#454545",
        fontSize: 15
    },
    registerLink: {
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 15
    },
});
