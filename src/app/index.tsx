import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router"
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Rez in Focus</Text>
      <Link href="/about">Go to About Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
