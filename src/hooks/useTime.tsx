import { Platform } from "react-native";
import { useState } from "react";
import { appState } from "../helpers/const/appState";

interface interfaceShow {
  open: boolean;
  close: boolean;
}

export default function useTime(site: appState["interfaceSiteCreate"], setSite: any) {
  const [show, setShow] = useState<interfaceShow>({
      open: false,
      close: false
  });

  const updateOpen = (event: any, value: any) => {
    updateDate(event, value, "openTimes");
  };

  const updateClose = (event: any, value: any) => {
    updateDate(event, value, "closeTimes");
  };

  const updateShow = (close: boolean, open:boolean) => {
    setShow({close: close, open: open})
  }

  const updateDate = (event: any, value: any, type: string) => {
    if (Platform.OS === "android") {
      setShow({
        open: false,
        close: false,
      });

      setSite({
        ...site,
        [type]: value,
      });
    }
  };

  return {
    updateClose,
    updateOpen,
    updateShow,
    show,
  };
}
