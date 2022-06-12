import { useContext } from "react";
import { ContextSites } from "../context/siteContext";
import { getPeticion } from "../helpers/funtions/petitions";
import useUser from "./useUser";
import { appState } from "../helpers/const/appState";

export default function useSites() {
  const { sites, setSites } = useContext<any>(ContextSites);
  const { jwt } = useUser();

  async function createdOrModifiedSites() {
    await getPeticion("sites/all", {}).then((resp) => {
      setSites({
        all: resp.docs,
        user: resp.docs.filter((site:appState["interfaceOneSite"]) => site.created_by === jwt.user._id),
        page: resp.page,
        totalPages: resp.totalPages
      })
    });
  }

    async function getMoreSites() {
      if(sites.page < sites.totalPages) {
        await getPeticion(`sites/all/${sites.page + 1}`, {}).then((resp) => {
          setSites({
            all: [...sites.all, ...resp.docs],
            user: [...sites.user, ...resp.docs.filter((site:appState["interfaceOneSite"]) => site.created_by === jwt.user._id)],
            page: sites.page + 1,
            totalPages: sites.totalPages
          })
        });
      }
    }

  const {all: allSites, user: sitesByUser} = sites
  return {
    allSites,
    sitesByUser,
    createdOrModifiedSites,
    getMoreSites
  };
}
