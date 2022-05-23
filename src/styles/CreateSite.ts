import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
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
    paddingHorizontal: 15,
  },
  borderItemForm: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  pickerCountry: {
    right: 10,
    width: "105%",
  },
  vacuneContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    justifyContent: "space-between",
    alignContent: "center",
  },
  vacuneText: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  vacuneSwitch: {},
  openSite: {
    paddingVertical: 15,
    paddingRight: 10,
  },
  viewContainerMap: {
    height: 470,
  },
  viewContainerMapExpand: {
    position: "relative",
    width: "100%",
    backgroundColor: "white",
    zIndex: 5,
  },
  containerHeaderMap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginVertical: 10,
  },
  containerHeaderTitleMap: {
    fontWeight: "bold",
    fontSize: 15,
  },
  containerHeaderButtonMap: {
    position: "relative",
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  containerHeaderButtonTextMap: {
    color: "white",
    marginRight: 10
  },
  mapDefault: {
    overflow: "hidden",
    borderRadius: 15
  },
  map: {
    height: 200,
    alignSelf: "stretch",
  },
  mapExtend: {
    alignSelf: "auto",
    height: 700,
    width: "100%",
  },
  buttonSend: {
    backgroundColor: "green",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 7,
    position: "absolute",
    top: 5,
    right: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelCreateSite: {
    marginVertical: 0,
    marginTop: 5
  },
  inputCreateSite: {
    paddingVertical: 3,
  }
});
