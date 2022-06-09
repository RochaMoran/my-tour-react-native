import { useContext, useEffect, useState } from "react";
import { ContextSites } from "../context/siteContext";
import { deletePeticion, getPeticion } from "../helpers/funtions/petitions";
import { Alert, ToastAndroid } from "react-native";
import {
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";
import useLocation from "./useLocation";
import { createSite, updateSite } from "../helpers/funtions/petitions";
import useUser from "./useUser";
import useCountries from "./useCountries";
import { appState } from "../helpers/const/appState";
import { defaultCreateSite } from "../helpers/const/defaultCreateSite";

export default function useSites() {
  const { sites, setSites } = useContext<any>(ContextSites);
  const { jwt } = useUser();

  async function createdOrModifiedSites() {
    await getPeticion("sites/", {}).then((resp) => {
      setSites({
        all: resp.sites,
        user: resp.sites.filter((site:appState["interfaceOneSite"]) => site.created_by === jwt.user._id)
      })
    });
  }

  const {all: allSites, user: sitesByUser} = sites
  return {
    allSites,
    sitesByUser,
    createdOrModifiedSites
  };
}
