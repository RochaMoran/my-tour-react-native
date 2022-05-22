import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./data";
import { appState } from "../helpers/const/appState";
import { colors } from "../styles/global";
import useUser from "../hooks/useUser";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function StackViews() {
  const { isLogged } = useUser();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <Text>Cargando</Text>
      ) : (
        <Stack.Navigator initialRouteName="Welcome">
          {isLogged
            ? Routes.auth.map(
                (route: appState["interfaceItemRoute"], i: number) => (
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
                      animationTypeForReplace: isLogged ? "pop" : "push",
                    }}
                  />
                )
              )
            : Routes.root.map(
                (route: appState["interfaceItemRoute"], i: number) => (
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
                      animationTypeForReplace: isLogged ? "pop" : "push",
                    }}
                  />
                )
              )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
