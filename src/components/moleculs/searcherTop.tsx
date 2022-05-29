import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/Search";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SearcherTop({setName}:any) {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.searchButton}>
        <Icon name="search" size={20} color="white" />
      </TouchableOpacity>
      <TextInput
        placeholderTextColor="#FFF"
        style={styles.searchInput}
        placeholder="Buscar..."
        onChangeText={(value) => setName(value)}
      />
      <TouchableOpacity style={styles.searchButton}>
        <Icon name="microphone" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
