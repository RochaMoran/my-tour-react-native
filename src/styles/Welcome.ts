import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 0.5,
  },
  imageWelcome: {
    flex: 0.4,
    width: "100%",
    resizeMode: "contain",
  },
  titleWelcome: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 10,
  },
  subtitleExperience: {
    color: "white",
    fontSize: 15,
    marginBottom: 10,
  },
  subtitleDinamic: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonGoogle: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "white",
  },
  buttonGoogleText: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonCreateAccountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonCreateAccount: {
    borderWidth: 2,
    borderColor: "white",
  },
  linkAlreadyAccount: {
    textAlign: "center",
    margin: 10,
    color: "white",
    fontSize: 16,
  },
  linkLogin: {
    fontWeight: "bold",
  },
});
