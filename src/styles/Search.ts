import { StyleSheet } from "react-native";
import { colors } from "./global";


export const styles = StyleSheet.create({
   searchContainer: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    padding: 5,
    height: 50
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
    height: 10
   },
   searchTabItem: {
    marginHorizontal: 20,
    padding: 5,
    height: 35,
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
    containerSiteResult: {
        backgroundColor: "#ebebeb",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5
    },
    siteResult: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    siteResultImage: {
        width: 120, height: 100, borderRadius: 5,
        resizeMode: "cover", marginRight: 10
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
        height: "80%"
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
    },
    containerActions: {
        flexDirection: "row",
        marginTop: 10,
        borderRadius: 10,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    actionsItem: {
        marginHorizontal: 10
    }
});
