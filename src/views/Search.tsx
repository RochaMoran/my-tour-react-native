import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconF from 'react-native-vector-icons/Fontisto'
import IconI from "react-native-vector-icons/Ionicons";
import { styles } from "../styles/Search";

export default function Search() {
  return (
    <View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={20} color="white" />
        </TouchableOpacity>
        <TextInput
          placeholderTextColor="#FFF"
          style={styles.searchInput}
          placeholder="Buscar..."
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="microphone" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.searchTab}>
        <TouchableOpacity
          style={[styles.searchTabItem, styles.searchItemSelected]}
        >
          <Text
            style={[styles.searchTabItemText, styles.searchItemTextSelected]}
          >
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
      <ScrollView style={styles.containerResults}>
        <View style={styles.siteResult}>
          <Image
            style={styles.siteResultImage}
            source={{
              uri: "https://as01.epimg.net/diarioas/imagenes/2022/03/25/actualidad/1648212028_088443_1648212178_noticia_normal.jpg",
            }}
          />
          <View>
            <View style={styles.containerBasicInfo}>
              <Text style={styles.titleItemSite}>MachuPicchu</Text>
              <Text style={styles.siteItemText}>Peru</Text>
            </View>
            <View style={styles.containerCovidInfo}>
              <Text style={styles.titleItemSite}>Covid Medidas</Text>
              <View style={styles.covidItem}>
                <IconFA5 name="head-side-mask" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText, styles.statusObligatory]}>Obligatorio</Text>
              </View>
              <View style={styles.covidItem}>
                <IconF name="injection-syringe" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText, styles.statusOptional]}>Opcional</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerStatusInfo}>
            <Text style={styles.titleItemSite}>Estado Apertura</Text>
            <Text style={[styles.siteItemText, styles.siteStatusOpen]}>Abierto</Text>
            <Text style={styles.titleItemSite}>Horarios:</Text>
            <Text style={styles.siteItemText}>Abre: 7:00AM</Text>
            <Text style={styles.siteItemText}>Cierra: 12:00PM</Text>
          </View>
        </View>
        <View style={styles.siteResult}>
          <Image
            style={styles.siteResultImage}
            source={{
              uri: "https://as01.epimg.net/diarioas/imagenes/2022/03/25/actualidad/1648212028_088443_1648212178_noticia_normal.jpg",
            }}
          />
          <View>
            <View style={styles.containerBasicInfo}>
              <Text style={styles.titleItemSite}>MachuPicchu</Text>
              <Text style={styles.siteItemText}>Peru</Text>
            </View>
            <View style={styles.containerCovidInfo}>
              <Text style={styles.titleItemSite}>Covid Medidas</Text>
              <View style={styles.covidItem}>
                <IconFA5 name="head-side-mask" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText, styles.statusObligatory]}>Obligatorio</Text>
              </View>
              <View style={styles.covidItem}>
                <IconF name="injection-syringe" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText, styles.statusObligatory]}>Obligatorio</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerStatusInfo}>
            <Text style={styles.titleItemSite}>Estado Apertura</Text>
            <Text style={[styles.siteItemText, styles.siteStatusOpen]}>Abierto</Text>
            <Text style={styles.titleItemSite}>Horarios:</Text>
            <Text style={styles.siteItemText}>Abre: 7:00AM</Text>
            <Text style={styles.siteItemText}>Cierra: 12:00PM</Text>
          </View>
        </View>
        <View style={styles.siteResult}>
          <Image
            style={styles.siteResultImage}
            source={{
              uri: "https://as01.epimg.net/diarioas/imagenes/2022/03/25/actualidad/1648212028_088443_1648212178_noticia_normal.jpg",
            }}
          />
          <View>
            <View style={styles.containerBasicInfo}>
              <Text style={styles.titleItemSite}>MachuPicchu</Text>
              <Text style={styles.siteItemText}>Peru</Text>
            </View>
            <View style={styles.containerCovidInfo}>
              <Text style={styles.titleItemSite}>Covid Medidas</Text>
              <View style={styles.covidItem}>
                <IconFA5 name="head-side-mask" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText, styles.statusObligatory]}>Obligatorio</Text>
              </View>
              <View style={styles.covidItem}>
                <IconF name="injection-syringe" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText, styles.statusOptional]}>Opcional</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerStatusInfo}>
            <Text style={styles.titleItemSite}>Estado Apertura</Text>
            <Text style={[styles.siteItemText, styles.siteStatusClose]}>Cerrado</Text>
            <Text style={styles.titleItemSite}>Horarios:</Text>
            <Text style={styles.siteItemText}>Abre: 7:00AM</Text>
            <Text style={styles.siteItemText}>Cierra: 12:00PM</Text>
          </View>
        </View>
        <View style={styles.siteResult}>
          <Image
            style={styles.siteResultImage}
            source={{
              uri: "https://as01.epimg.net/diarioas/imagenes/2022/03/25/actualidad/1648212028_088443_1648212178_noticia_normal.jpg",
            }}
          />
          <View>
            <View style={styles.containerBasicInfo}>
              <Text style={styles.titleItemSite}>MachuPicchu</Text>
              <Text style={styles.siteItemText}>Peru</Text>
            </View>
            <View style={styles.containerCovidInfo}>
              <Text style={styles.titleItemSite}>Covid Medidas</Text>
              <View style={styles.covidItem}>
                <IconFA5 name="head-side-mask" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText]}>Obligatorio</Text>
              </View>
              <View style={styles.covidItem}>
                <IconF name="injection-syringe" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText]}>Obligatorio</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerStatusInfo}>
            <Text style={styles.titleItemSite}>Estado Apertura</Text>
            <Text style={[styles.siteItemText, styles.siteStatusOpen]}>Abierto</Text>
            <Text style={styles.titleItemSite}>Horarios:</Text>
            <Text style={styles.siteItemText}>Abre: 7:00AM</Text>
            <Text style={styles.siteItemText}>Cierra: 12:00PM</Text>
          </View>
        </View>
        <View style={styles.siteResult}>
          <Image
            style={styles.siteResultImage}
            source={{
              uri: "https://as01.epimg.net/diarioas/imagenes/2022/03/25/actualidad/1648212028_088443_1648212178_noticia_normal.jpg",
            }}
          />
          <View>
            <View style={styles.containerBasicInfo}>
              <Text style={styles.titleItemSite}>MachuPicchu</Text>
              <Text style={styles.siteItemText}>Peru</Text>
            </View>
            <View style={styles.containerCovidInfo}>
              <Text style={styles.titleItemSite}>Covid Medidas</Text>
              <View style={styles.covidItem}>
                <IconFA5 name="head-side-mask" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText]}>Obligatorio</Text>
              </View>
              <View style={styles.covidItem}>
                <IconF name="injection-syringe" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText]}>Obligatorio</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerStatusInfo}>
            <Text style={styles.titleItemSite}>Estado Apertura</Text>
            <Text style={[styles.siteItemText, styles.siteStatusOpen]}>Abierto</Text>
            <Text style={styles.titleItemSite}>Horarios:</Text>
            <Text style={styles.siteItemText}>Abre: 7:00AM</Text>
            <Text style={styles.siteItemText}>Cierra: 12:00PM</Text>
          </View>
        </View>
        <View style={styles.siteResult}>
          <Image
            style={styles.siteResultImage}
            source={{
              uri: "https://as01.epimg.net/diarioas/imagenes/2022/03/25/actualidad/1648212028_088443_1648212178_noticia_normal.jpg",
            }}
          />
          <View style={styles.containerStatusInfo}>
            <Text style={styles.titleItemSite}>Estado Apertura</Text>
            <Text style={[styles.siteItemText, styles.siteStatusOpen]}>Abierto</Text>
            <Text style={styles.titleItemSite}>Horarios:</Text>
            <Text style={styles.siteItemText}>Abre: 7:00AM</Text>
            <Text style={styles.siteItemText}>Cierra: 12:00PM</Text>
          </View>
        </View>
        <View style={styles.siteResult}>
          <Image
            style={styles.siteResultImage}
            source={{
              uri: "https://as01.epimg.net/diarioas/imagenes/2022/03/25/actualidad/1648212028_088443_1648212178_noticia_normal.jpg",
            }}
          />
          <View>
            <View style={styles.containerBasicInfo}>
              <Text style={styles.titleItemSite}>MachuPicchu</Text>
              <Text style={styles.siteItemText}>Peru</Text>
            </View>
            <View style={styles.containerCovidInfo}>
              <Text style={styles.titleItemSite}>Covid Medidas</Text>
              <View style={styles.covidItem}>
                <IconFA5 name="head-side-mask" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText, styles.statusObligatory]}>Obligatorio</Text>
              </View>
              <View style={styles.covidItem}>
                <IconF name="injection-syringe" color="#5e5e5e" size={15} />
                <Text style={[styles.covidItemTex, styles.siteItemText]}>Obligatorio</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerStatusInfo}>
            <Text style={styles.titleItemSite}>Estado Apertura</Text>
            <Text style={[styles.siteItemText, styles.siteStatusOpen]}>Abierto</Text>
            <Text style={styles.titleItemSite}>Horarios:</Text>
            <Text style={styles.siteItemText}>Abre: 7:00AM</Text>
            <Text style={styles.siteItemText}>Cierra: 12:00PM</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
