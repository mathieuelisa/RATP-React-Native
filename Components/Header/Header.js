import { View, Image } from "react-native";
import styles from "./styles";

const Header = () => {
  return (
    <View>
      <Image style={styles.logo} source={require("../../assets/ratp.png")} />
    </View>
  );
};

export default Header;
