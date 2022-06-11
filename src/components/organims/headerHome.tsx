import { View, Text, ImageBackground, AppState } from "react-native";
import { appState } from "../../helpers/const/appState";
import { styles } from "../../styles/Home";

export default function HeaderHome({
  imgUrl,
  title,
  subTitle,
  stylesHeader,
  addStyles,
  children
}: appState["headerHome"]) {
  return (
    <View style={[styles.header, stylesHeader?.header]}>
      <ImageBackground
        source={{
          uri: imgUrl,
        }}
        blurRadius={1}
        style={[styles.headerImage, stylesHeader?.headerImage]}
      >
          <Text style={[styles.headerTitle, addStyles?.title]}>{title}</Text>
          <Text style={[styles.headerContent, addStyles?.subtitle]}>{subTitle}</Text>
          {children}
      </ImageBackground>
    </View>
  );
}
