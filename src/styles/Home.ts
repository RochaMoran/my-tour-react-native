import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    header: {
        position: "relative"
    },
    headerImage: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.7)",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10
    },
    headerContent: {
        fontSize: 15,
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.7)",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10
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
        height: 150,
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
        height: 220,
        width: 200,
        marginRight: 20,
        borderRadius: 15,
        overflow: "hidden"
    },
    highCardImage: {
        flex: 1,
        resizeMode: "cover",
    }
});
