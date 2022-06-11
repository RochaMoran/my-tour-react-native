import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../../styles/CreateSite";
import MapView, { Marker } from "react-native-maps";
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
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
          style={[styles.buttonSend, styles.containerHeaderButtonMap]}
        >
          <Text style={styles.containerHeaderButtonTextMap}>
            {expandMap ? "Collapsar" : "Expandir"}
          </Text>
          <IconFontAwesome name="expand" color="white" size={15} />
        </TouchableOpacity>
      </View>
      <View style={expandMap ? [styles.mapExtend, styles.mapDefault] : [styles.map, styles.mapDefault]}>
        <MapView
          region={location}
          style={{ flex: 1 }}
        >
          {
            update ?  <Marker
            coordinate={location}
            draggable={true}
            onDragEnd={(e) =>
              update(
                e.nativeEvent.coordinate.latitude,
                e.nativeEvent.coordinate.longitude
              )
            }
          /> : <Marker
                coordinate={location}
                image={require("../../assets/ellipse.png")}
              />
          }
        </MapView>
      </View>
    </ScrollView>
  );
}
