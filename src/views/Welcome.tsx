import { View, Text, StyleSheet } from "react-native";

export default function Welcome () {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
  });
  