import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import StyledButton from "./StyledComponents/Button";
import Header from "./Components/Header/Header";
import { useState } from "react";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

      <Modal
        visible={modal}
        transparent
        onRequestClose={() => {
          setModal(false);
        }}
        animationType="fade"
      >
        <View style={styles.wrapperResults}>
          <View style={styles.results}>
            <View style={styles.titleResults}>
              <Text>Votre prime est de : </Text>
            </View>
            <View style={styles.average}>
              <Text style={styles.averageText}>125 euros</Text>
            </View>
            <View>
              <Text style={styles.currentDate}>
                pour la journée du 16 Janvier 2021
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setModal(false);
              }}
            >
              <Text styles={styles.closeModal}>FERMER</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.containerInputs}>
        <TextInput style={styles.input} keyboardType="numeric" />
        <Text style={styles.title}>NOMBRES DE PARTICIPANTS</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
        <Text style={styles.title}>QUITTANCES DE 35 EUROS</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
        <Text style={styles.title}>QUITTANCES DE 50 EUROS</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
        <Text style={styles.title}>QUITTANCES DE 60 EUROS</Text>
        <StyledButton
          onPress={() => {
            setModal(true);
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09044e",
    alignItems: "center",
    width: "100%",
  },
  containerInputs: {
    top: 120,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "whitesmoke",
    width: "60%",
    textAlign: "center",
    color: "whitesmoke",
    fontSize: 33,
    marginTop: 22,
  },
  title: {
    color: "whitesmoke",
  },
  wrapperResults: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000088",
  },
  results: {
    height: 300,
    width: 300,
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    alignItems: "center",
  },
  titleResults: {
    height: 50,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
    backgroundColor: "#1FAF9C",
    alignItems: "center",
    justifyContent: "center",
  },
  average: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  averageText: {
    color: "#1FAF9C",
    fontSize: 46,
    fontWeight: "bold",
  },
  currentDate: {
    height: 60,
  },
  closeModal: {
    height: 100,
  },
});
