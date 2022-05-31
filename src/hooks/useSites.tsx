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

export default function useSites(siteParam?:any) {
  const { sites, setSites } = useContext<any>(ContextSites);
  const { location, updateCoordinates } = useLocation(siteParam?.location);
  const { jwt } = useUser();
  const { countries } = useCountries();
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false)
  const defaultValueSite = defaultCreateSite(siteParam)
  const [site, setSite] = useState<any>({...defaultValueSite, createdBy: jwt.user._id});

  useEffect(() => {
    setSite({...defaultValueSite, createdBy: jwt.user._id})
  }, [siteParam])

  useEffect(() => {
    async function getData() {
      getPeticion("sites/", {}).then((resp) => {
        setSites({
          all: resp.sites,
          user: resp.sites.filter((site:appState["interfaceOneSite"]) => site.created_by === jwt.user._id)
        })
      });
    }
    getData();

    () => {
      setSite({})
    }
  }, [isCreateOrUpdate]);

  function updateAttributteSite(name: string, value: any) {
    setSite({
      ...site,
      [name]: {
        value: value,
        error: "",
      },
    });
  }

  const askForPermission = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("no permissions to access camera!");
      return false;
    }
    return true;
  };

  const uploadImage = async () => {
    const permisions = await askForPermission();
    if (permisions) {
      let result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      const { cancelled } = result;

      if (!cancelled) {
        const localUri = result.uri,
          filename = localUri.split("/").pop(),
          match = /\.(\w+)$/.exec(filename || ""),
          type = match ? `image/${match[1]}` : `image`;

        setSite({
          ...site,
          image: {
            value: {
              uri: localUri,
              name: filename,
              type: type,
            },
          },
        });
      }

      return;
    } else {
      ToastAndroid.show("Permisos denegados", ToastAndroid.SHORT);
    }
  };

  async function handleSubmitSite() {
    if (
      validateImage() &&
      validateText("name") &&
      validateText("description") &&
      validateText("country") &&
      validateText("openTimes") &&
      validateText("closeTimes")
    ) {
      let resp = site?._id ? await updateSite({ site, location, jwt }) : await createSite({ site, location, jwt })

      if (resp.ok) {
        ToastAndroid.show(site?._id ? "Sitio modificado exitosamente" : "Sitio creado exitosamente", ToastAndroid.SHORT);
        setIsCreateOrUpdate(value => !value)
      } else {
        ToastAndroid.show(
          "Ha ocurrido un error al crear el sitio",
          ToastAndroid.SHORT
        );
      }
    }
  }

  function validateText(name: string) {
    if (site[name].value === "") {
      setSite({
        ...site,
        [name]: {
          ...site[name],
          error: `Favor, seleccione ${name} del sitio`,
        },
      });

      return false;
    }

    return true;
  }

  function validateImage() {
    if (!site.image.value.uri) {
      setSite({
        ...site,
        image: {
          ...site.image,
          error: "Favor, seleccione la imagen del sitio",
        },
      });

      return false;
    }

    setSite({
      ...site,
      image: {
        ...site.image,
        error: "",
      },
    });
    return true;
  }

  async function deleteSite(id: any) {
    await deletePeticion(`sites/delete/${id}`, {}).then((resp) => {
      if (resp.ok) {
        ToastAndroid.show("Sitio Eliminado", ToastAndroid.BOTTOM);
        setIsCreateOrUpdate(value => !value)
      } else {
        ToastAndroid.show(
          "Ha ocurrido un error al eliminar el sitio",
          ToastAndroid.BOTTOM
        );
      }
    });
  }

  const {all: allSites, user: sitesByUser} = sites
  return {
    countries,
    site,
    location,
    setSite,
    updateAttributteSite,
    uploadImage,
    allSites,
    sitesByUser,
    updateCoordinates,
    handleSubmitSite,
    deleteSite,
    isCreateOrUpdate
  };
}
