import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../../styles/CreateSite";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import useLocation from "../../hooks/useLocation";

export default function MapCreateSite() {
  const [expandMap, setExpandMap] = useState<boolean>(false);
  const { location, updateCoordinates } = useLocation();

  return (
    <ScrollView
      style={
        expandMap ? styles.viewContainerMapExpand : styles.viewContainerMap
      }
    >
      <View style={styles.containerHeaderMap}>
        <Text style={styles.containerHeaderTitleMap}>
          Seleccione Ubicacion:{" "}
        </Text>
        <TouchableOpacity
          onPress={() => setExpandMap((value) => !value)}
          style={styles.containerHeaderButtonMap}
        >
          <Text style={styles.containerHeaderButtonTextMap}>
            {expandMap ? "Collapsar" : "Expandir"}
          </Text>
        </TouchableOpacity>
      </View>
      <MapView
        region={location}
        style={expandMap ? styles.mapExtend : styles.map}
      >
        <Marker
          coordinate={location}
          draggable={true}
          onDrag={(e) =>
            updateCoordinates(
              e.nativeEvent.coordinate.latitude,
              e.nativeEvent.coordinate.longitude
            )
          }
        />
      </MapView>
    </ScrollView>
  );
}
