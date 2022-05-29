import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingLogo: {
    resizeMode: "contain",
    width: 250,
    height: 120,
  },
  containerSpinner: {
    //   flex: 1,
  },
});
