import { StyleSheet } from "react-native";
import { colors } from "./global";


export const styles = StyleSheet.create({
   searchContainer: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    padding: 5
   },
   searchButton: {
       marginHorizontal: 20,
    },
    searchInput: {
        color: "white",
        width: "75%",
   },
   searchTab: {
    backgroundColor: colors.primary,
    paddingVertical: 10,

   },
   searchTabItem: {
    marginHorizontal: 20,
    padding: 5,
    },
    searchTabItemText: {
        textTransform: "uppercase" ,
        color: "white",
        fontWeight: "bold"
    },
    searchItemSelected: {
        borderBottomColor: "black",
        borderBottomWidth: 2
    },
    searchItemTextSelected: {
        color: "black"
    },
    siteResult: {
        backgroundColor: "#e0e0e0",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5
    },
    siteResultImage: {
        width: "35%",
        height: "100%",
        borderRadius: 5,
        resizeMode: "cover"
    },
    titleItemSite: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#262626"
    },
    siteItemText: {
        fontStyle: "italic",
        color: "#5e5e5e"
    },
    containerResults: {
    },
    containerBasicInfo: {

    },
    containerCovidInfo: {

    },
    containerStatusInfo: {

    },
    statusTime: {
        flexDirection: "row"
    },
    covidItem: {
        flexDirection: "row",
        alignItems: "center"
    },
    covidItemTex: {
        marginLeft: 5
    },
    siteStatusOpen: {
        color: colors.primary,
    },
    siteStatusClose: {
        color: "red",
    },
    statusOptional: {
        color: "#d6930d"
    },
    statusObligatory: {
        color: "#1b0991"
    }
});
