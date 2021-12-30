import { View, Button, Pressable, Text } from "react-native";
import styles from "./styles";

const StyledButton = () => {
  return (
    <View style={styles.containerButton}>
      <Pressable style={styles.myButton} onPress={() => console.warn("coucou")}>
        <Text style={styles.text}>PRESS ME</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
