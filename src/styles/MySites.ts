import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
    containerTop: {
        backgroundColor: colors.primary,
        paddingVertical: 10
    },
    titleHeader: {
        color: "white",
        marginHorizontal: 15,
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 17
    }
});
