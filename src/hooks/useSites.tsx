import { useContext, useEffect, useState } from "react";
import { ContextSites } from "../context/siteContext";
import { getPeticion } from "../helpers/funtions/petitions";
import useUser from "./useUser";
import { appState } from "../helpers/const/appState";

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
