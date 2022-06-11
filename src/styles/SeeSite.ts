import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
  container: {},
  header: {},
  headerImage: {
    height: 250,
  },
  body: {
      backgroundColor: "white",
      height: "100%",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      position: "relative",
      bottom: 15,
      padding: 15
  },
  title: {
    position: "absolute",
    bottom: 50,
    left: 20
  }, 
  subtitle: {
    position: "absolute",
    bottom: 30,
    left: 20
  },
  containerLocation: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0
  },
  likes: {
    position: "absolute",
    flexDirection: "row",
    bottom: 40,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15
  }
});
