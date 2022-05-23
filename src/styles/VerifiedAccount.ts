import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
    verifiedContainer: {
        flex: 1,
        backgroundColor: colors.primary
    },
    verifiedHeader: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
        height: "30%",
    },
    verifiedHeaderImage: {
        resizeMode: "contain",
        width: 220
    },
    verifiedBody: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "white",
        position: "relative",
        height: "80%",
        bottom: 30,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    verifiedTitleBody: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 10,
        color: "#555"
    },
    verifiedTextBody: {
        textAlign: "center",
        fontWeight: "600",
        color: "#888",
        fontSize: 15,
        marginVertical: 20
    },
    verifiedInputBody: {
        padding: 20,
        marginVertical: 20,
        fontSize: 50,
        letterSpacing: 10,
        textAlign: "center"
    },
    verifiedButtonBody: {
        backgroundColor: colors.primary,
        borderRadius: 15,
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    verifiedTextButtonBody: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
});
