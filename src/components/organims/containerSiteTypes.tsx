import React from "react";
import { appState } from "../../helpers/const/appState";
import Site from "../moleculs/site";
import ContainerSites from "./containerSites";

export default function ContainerSitesType({
  sites,
  title,
  type,
}: appState["interfaceContainerSite"]) {
  return (
    <ContainerSites title={title}>
      {sites.map((site: appState["interfaceSiteCreate"], index: number) => (
        <Site
          key={index}
          type={type}
          name={site.name}
          imgUrl={site.imgUrl}
          country={site.country}
        />
      ))}
    </ContainerSites>
  );
}
