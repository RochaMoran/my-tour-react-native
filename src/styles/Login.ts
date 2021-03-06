import { StyleSheet } from "react-native";
import { colors, globalStyles } from "./global";

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
        minHeight: 450,
        height: "80%",
        backgroundColor: "white",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 30,
        paddingHorizontal: 20,
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
        borderBottomColor: colors.border,
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
    headerImage: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    headerImageContainer: {
        
    },
    createSiteHeader: {
        height: 150,
    },
    createSiteHeaderTitle: {
        marginHorizontal: 0,
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
        marginTop: 0,
        marginVertical: 5,
        zIndex: 5
    },
    inputLoginError: {
        borderBottomColor: 'red'
    },
    messageError: {
        display: 'flex',
        color: 'red'
    },
    messageErrorHide: {
        display: 'none'
    },
    centerMessageError: {
        textAlign: 'center'
    },
    buttonLogOut: {
        backgroundColor: "red"
    },
    loginErrorContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    verifiedLoginButton: {
        paddingHorizontal: 10,
    },
    verifiedLoginButtonText: {
        color: "red",
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 16
    }
});
