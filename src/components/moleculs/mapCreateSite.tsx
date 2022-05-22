import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../../styles/CreateSite";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

export default function MapCreateSite({location, update}:any) {
  const [expandMap, setExpandMap] = useState<boolean>(false);

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
        {
          update &&  <Marker
          coordinate={location}
          draggable={true}
          onDragEnd={(e) =>
            update(
              e.nativeEvent.coordinate.latitude,
              e.nativeEvent.coordinate.longitude
            )
          }
        />
        }
      </MapView>
    </ScrollView>
  );
}
