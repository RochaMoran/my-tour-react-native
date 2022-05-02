import { useState, useEffect } from "react";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState<any>({
    latitude: 42.30695,
    longitude: -115.6116,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({});

      setLocation({
        latitudeDelta: 0.0922,
        longitudeDelta: 0.042,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  function updateCoordinates(lat: number, long: number) {
    setLocation({
      ...location,
      latitude: lat,
      longitude: long,
    });
  }

  return {
      location,
      updateCoordinates
  }
}
