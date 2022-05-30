import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
  containerTop: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
  },
  titleHeader: {
    color: "white",
    marginHorizontal: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 17,
  },
  modalBack: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: { fontWeight: "bold", fontSize: 15 },
  modalBody: { flexDirection: "row" },
  modalButton: {
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  modalButtonPrimary: {
    backgroundColor: colors.primary,
  },
  modalButtonSecondary: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  textButtonPrimary: {
    color: "white",
  },
  textButtonSecondary: {
    color: colors.primary,
  },
});
