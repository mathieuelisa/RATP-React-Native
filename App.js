import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import StyledButton from "./StyledComponents/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/ratp.png")} />
      <TextInput style={styles.input} />
      <Text style={styles.title}>NOMBRES DE PARTICIPANTSS</Text>
      <TextInput style={styles.input} />
      <Text style={styles.title}>QUITTANCES DE 35 EUROS</Text>
      <TextInput style={styles.input} />
      <Text style={styles.title}>QUITTANCES DE 50 EUROS</Text>
      <TextInput style={styles.input} />
      <Text style={styles.title}>QUITTANCES DE 60 EUROS</Text>
      <StyledButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09044e",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "whitesmoke",
    width: "60%",
    textAlign: "center",
    color: "whitesmoke",
    fontSize: 33,
  },
  title: {
    color: "whitesmoke",
  },
  container2: {
    backgroundColor: "grey",
    height: 22,
    width: 93,
  },
  logo: {
    position: "absolute",
    top: 50,
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
