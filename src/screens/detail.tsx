import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { FocusAwareStatusBar } from "../components";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFDE03",
    flex: 1
  },
  topIcon: { height: 30, marginTop: 20, width: 40 },
  drawerWrapper: { height: "20%", paddingHorizontal: 20 },
  presser: { width: 50 },
  headerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 24,
    width: "100%"
  },
  separator: { height: 20 },
  passwordHeading: { color: "#121212", fontSize: 28, fontWeight: "bold" },
  plusWrapper: {
    alignItems: "center",
    backgroundColor: "#0336FF",
    borderRadius: 25,
    elevation: 1.5,
    height: 50,
    justifyContent: "center",
    width: 50
  },
  body: {
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    paddingTop: 30
  },
  noDataWrapper: {
    alignItems: "center",
    height: 400,
    justifyContent: "center"
  },
  noPassword: { fontSize: 15, marginTop: 32 }
});

function ItemSeparator() {
  return <View style={styles.separator} />;
}

export const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        bar-style="light-content"
        backgroundColor={Platform.OS === "android" ? "#FC000" : undefined}
      />
      <View style={styles.drawerWrapper}>
        <Pressable style={styles.presser}>
          <Image
            source={require("../../assets/images/1.png")}
            style={styles.topIcon}
            resizeMode="contain"
          />
        </Pressable>
        <View style={styles.headerWrapper}>
          <View style={{ width: "70%" }}>
            <Text style={styles.passwordHeading}>My Passwords</Text>
          </View>

          <View style={{ width: "30%", alignItems: "flex-end" }}>
            <Pressable style={styles.plusWrapper}>
              <Ionicons name="add-outline" color={"#FFF"} size={32} />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.noDataWrapper}>
          <Image source={require("../../assets/images/noPwd.png")} />
          <Text style={styles.noPassword}>No Passwords</Text>
        </View>
      </View>
    </View>
  );
};
