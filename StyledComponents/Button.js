import { View, Pressable, Text } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const onPress = props.onPress;

  return (
    <View style={styles.containerButton}>
      <Pressable
        style={styles.myButton}
        onPress={() => onPress()}
        android_ripple={{ color: "#1FAF9C" }}
      >
        <Text style={styles.text}>LET'S GO</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
