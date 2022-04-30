import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./data";
import { appState } from "../helpers/const/appState";
import { colors } from "../styles/global";
import useUser from "../hooks/useUser";

const Stack = createNativeStackNavigator();

export default function StackViews() {
  const { isLogged } = useUser()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {isLogged
          ? ( Routes.auth.map((route: appState["itemRoute"], i: number) => (
              <Stack.Screen
                key={i}
                name={route.name}
                component={route.component}
                options={{
                  title: "",
                  headerShown: false,
                  headerTintColor: "white",
                  headerStyle: {
                    backgroundColor: colors.primary,
                  },
                  headerShadowVisible: false,
                  headerBackTitleVisible: false,
                  animationTypeForReplace: isLogged ? 'pop' : 'push',
                }}
              />
              ))
          )
          : Routes.root.map((route: appState["itemRoute"], i: number) => (
              <Stack.Screen
                key={i}
                name={route.name}
                component={route.component}
                options={{
                  title: "",
                  headerTintColor: "white",
                  headerStyle: {
                    backgroundColor: colors.primary,
                  },
                  headerShadowVisible: false,
                  headerBackTitleVisible: false,
                  animationTypeForReplace: isLogged ? 'pop' : 'push',
                }}
              />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
