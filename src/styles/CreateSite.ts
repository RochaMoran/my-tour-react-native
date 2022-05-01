import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    bodyCreateSite: {
        backgroundColor: "white", 
        height: "100%", 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        paddingBottom: 15,
        position: "relative",
        bottom: 15,
        paddingTop: 20,
        paddingHorizontal: 15
    },
    borderItemForm: {
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
    },
    pickerCountry: {
        
    },
    vacuneContainer: {
        flexDirection: "row",
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignContent: "center"
    },
    vacuneText: {
        alignSelf: "center",
        fontWeight: "bold"
    },
    vacuneSwitch: {
    },
    openSite: {
        paddingVertical: 15,
        paddingRight: 10
    }
});
