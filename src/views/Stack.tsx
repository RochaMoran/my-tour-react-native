import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./data";
import { appState } from "../helpers/const/appState";

const Stack = createNativeStackNavigator();

export default function StackViews() {
  const isLogged: boolean = false;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {isLogged
          ? Routes.auth.map((route: appState["itemRoute"], i: number) => (
              <Stack.Screen
                options={{ headerShown: false }}
                key={i}
                name={route.name}
                component={route.component}
              />
            ))
          : Routes.root.map((route: appState["itemRoute"], i: number) => (
              <Stack.Screen
                options={{ headerShown: false }}
                key={i}
                name={route.name}
                component={route.component}
              />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
