import { View, Text, ImageBackground, AppState } from "react-native";
import { appState } from "../../helpers/const/appState";
import { styles } from "../../styles/Home";

export default function HeaderHome ({imgUrl, title, subTitle, stylesHeader}:appState["headerHome"]) {
    return (
        <View style={[styles.header, stylesHeader?.header]}>
        <ImageBackground source={{
          uri: imgUrl
          
        }} blurRadius={1} style={[styles.headerImage, stylesHeader?.headerImage]}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerContent}>{subTitle}</Text>
        </ ImageBackground>
      </View>
    )
}