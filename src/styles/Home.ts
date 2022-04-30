import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    header: {
    },
    headerImage: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    headerContent: {
        fontSize: 15,
        color: "white"
    },
    bodyHome: {
        backgroundColor: "white",
        height: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: "relative",
        bottom: 25,
        paddingBottom: 90
    },
    moreVisited: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    containerTitle: {
        fontWeight: "bold",
        fontSize: 15,
        marginVertical: 5,
    },
    sitesHorizontal: {
    },
    likeButton: {
        position: "absolute",
        right: 2,
        padding: 10
    },
    lgCard: {
        height: 130,
        width: 320,
        marginRight: 20,
        borderRadius: 15,
        overflow: "hidden"
    },
    lgCardImage: {
        flex: 1,
        resizeMode: "cover",
    },
    lgCardSiteContainer: {
        position: "absolute",
        bottom: 15,
        left: 15,
    },
    lgCardSite: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    lgCardUbication: {
        fontSize: 13,
        color: "white",
    },
    newSites: {
        marginVertical: 0
    },
    highCard: {
        height: 200,
        width: 150,
        marginRight: 20,
        borderRadius: 15,
        overflow: "hidden"
    },
    highCardImage: {
        flex: 1,
        resizeMode: "cover",
    }
});
