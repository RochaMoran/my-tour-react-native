import React from "react";
import { TouchableOpacity, ScrollView, Text } from "react-native";
import { styles } from "../../styles/Search";

export default function TabSearch() {
  return (
    <ScrollView horizontal={true} style={styles.searchTab}>
      <TouchableOpacity
        style={[styles.searchTabItem, styles.searchItemSelected]}
      >
        <Text style={[styles.searchTabItemText, styles.searchItemTextSelected]}>
          Lo mas popular
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchTabItem}>
        <Text style={styles.searchTabItemText}>Lo mas nuevo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchTabItem}>
        <Text style={styles.searchTabItemText}>Lo mas barato</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchTabItem}>
        <Text style={styles.searchTabItemText}>Lo mas caro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchTabItem}>
        <Text style={styles.searchTabItemText}>Lo mas cercano</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
