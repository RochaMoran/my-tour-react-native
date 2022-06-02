import { Alert, Modal, Text, TouchableOpacity, View, ToastAndroid } from "react-native";
import useSite from "../../hooks/useSite";
import { styles } from "../../styles/MySites";

export default function ModalMessage ({isModalShow, setIsModalShow, id}:any) { 
  const { deleteSite } = useSite()
  return (
        <Modal animationType="slide"
          transparent={true}
          visible={isModalShow}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <View style={styles.modalBack}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>¿Esta seguro que desea eliminar este sitio?</Text>
                <View style={styles.modalBody}>
                  <TouchableOpacity onPress={() => setIsModalShow(false)} style={[styles.modalButton, styles.modalButtonSecondary]}>
                    <Text style={styles.textButtonSecondary}>
                      Cancelar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={ () => deleteSite(id)} style={[styles.modalButton, styles.modalButtonPrimary]}>
                    <Text style={styles.textButtonPrimary}>
                      Aceptar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Modal>
    )
}