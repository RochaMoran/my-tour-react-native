import { StyleSheet } from "react-native";
import { colors } from "./global";

export const styles = StyleSheet.create({
   tab: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
    borderRadius: 15,
    height: 90,
    shadowColor: "#7f5df0",
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
   },
   item: {
    alignItems: 'center', 
    justifyContent: 'center'
   },
   buttonCreateSite: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#7f5df0",
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
   },
   viewCreateSite: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: colors.primary
   }
});
