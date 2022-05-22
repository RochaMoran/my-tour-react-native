import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "../../styles/Login";
import Svg, { Path } from "react-native-svg";
import { appState } from "../../helpers/const/appState";
import Icon from 'react-native-vector-icons/FontAwesome'

export default function HeaderView({title, create, action, image}:appState["interfaceHeaderView"]) {
  return (
    <View style={create ? styles.createSiteHeader : styles.loginHeader}>
      {
        create ? (
          <ImageBackground blurRadius={5} style={styles.headerImage} source={{uri: image || 'https://as01.epimg.net/diarioas/imagenes/2022/03/25/actualidad/1648212028_088443_1648212178_noticia_normal_recorte1.jpg'}}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => action()}>
              <Text style={[styles.loginHeaderTitle, styles.createSiteHeaderTitle]}>{title}</Text>
              <Icon size={30} color="white" name="camera" />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <>
          <Text style={styles.loginHeaderTitle}>{title}</Text>
            <Svg style={styles.loginHeaderWave} viewBox="0 0 1440 320">
              <Path
                fill="#2da14c"
                fillOpacity="0.4"
                d="M0,224L34.3,229.3C68.6,235,137,245,206,224C274.3,203,343,149,411,138.7C480,128,549,160,617,154.7C685.7,149,754,107,823,96C891.4,85,960,107,1029,101.3C1097.1,96,1166,64,1234,69.3C1302.9,75,1371,117,1406,138.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              />
            </Svg>
            <Svg
              style={[styles.loginHeaderWave, styles.loginHeaderWave2]}
              viewBox="0 0 1440 320"
            >
              <Path
                fill="#2da14c"
                fillOpacity="0.8"
                d="M0,224L34.3,229.3C68.6,235,137,245,206,224C274.3,203,343,149,411,138.7C480,128,549,160,617,154.7C685.7,149,754,107,823,96C891.4,85,960,107,1029,101.3C1097.1,96,1166,64,1234,69.3C1302.9,75,1371,117,1406,138.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              />
            </Svg>
          </>
        )
      }
     
    </View>
  );
}
