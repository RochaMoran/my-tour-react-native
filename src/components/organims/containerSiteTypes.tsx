import React from "react";
import { FlatList, ScrollView } from "react-native";
import { appState } from "../../helpers/const/appState";
import Site from "../moleculs/site";
import ContainerSites from "./containerSites";

export default function ContainerSitesType({
  sites,
  title,
  type,
  getMoreSites,
}: appState["interfaceContainerSite"]) {
  return (
    <>
      <ContainerSites title={title} />
      <FlatList
        style={{ height: type === "lg" ? 60 : 200, marginHorizontal: 10 }}
        data={sites}
        horizontal={true}
        keyExtractor={(item) => item._id}
        onEndReached={getMoreSites}
        renderItem={({ item }) => (
          <Site
            key={item._id}
            id={item._id}
            type={type}
            name={item.name}
            imgUrl={item.imgUrl}
            country={item.country}
          />
        )}
      />
    </>
  );
}
