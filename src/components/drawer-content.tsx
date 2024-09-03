/* eslint-disable react/no-unstable-nested-components */
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DRAWER_COLOR = "#FFF";
const DRAWER_ICON_SIZE = 20;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1
  },
  drawerContent: {
    flex: 1,
    minHeight: 300
  },
  circle1: {
    backgroundColor: "#FFF",
    borderRadius: 100,
    height: 200,
    left: -50,
    opacity: 0.1,
    position: "absolute",
    top: -50,
    width: 200
  },
  circle2: {
    backgroundColor: "#FFF",
    borderRadius: 140,
    height: 280,
    left: -80,
    opacity: 0.1,
    position: "absolute",
    top: -78,
    width: 280
  },
  circle3: {
    backgroundColor: "#FFF",
    borderRadius: 180,
    height: 360,
    left: -110,
    opacity: 0.06,
    position: "absolute",
    top: -105,
    width: 360
  },
  logoStyle: {
    height: "100%",
    width: "100%"
  },
  drawerSection: {
    marginLeft: 24,
    marginTop: 8,
    minHeight: 300
  },
  bottomDrawerSection: {
    borderTopColor: "#181818",
    borderTopWidth: 1,
    marginBottom: 16,
    paddingLeft: 24
  },
  imageWrapper: {
    height: 70,
    marginBottom: 20,
    marginLeft: 36,
    marginTop: 40,
    width: 200
  },
  drawerLabel: { color: DRAWER_COLOR }
});

const DrawerContent = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
            <View style={styles.circle3} />

            <View style={styles.imageWrapper}>
              <Image
                source={require("../../assets/images/logo2-darkbg.png")}
                style={styles.logoStyle}
                resizeMode="contain"
              />
            </View>
          </>

          <View style={styles.drawerSection}>
            <DrawerItem
              icon={() => (
                <Ionicons
                  name="lock-closed-outline"
                  color={DRAWER_COLOR}
                  size={DRAWER_ICON_SIZE}
                />
              )}
              label={() => <Text style={styles.drawerLabel}>Passwords</Text>}
              onPress={() => true}
            />

            <DrawerItem
              icon={() => (
                <Ionicons
                  name="card-outline"
                  color={DRAWER_COLOR}
                  size={DRAWER_ICON_SIZE}
                />
              )}
              label={() => <Text style={styles.drawerLabel}>Cards</Text>}
              onPress={() => true}
            />

            <DrawerItem
              icon={() => (
                <Ionicons
                  name="swap-vertical-outline"
                  color={DRAWER_COLOR}
                  size={DRAWER_ICON_SIZE}
                />
              )}
              label={() => (
                <Text style={styles.drawerLabel}>Backup, Restore & Export</Text>
              )}
              onPress={() => true}
            />

            <DrawerItem
              icon={() => (
                <Ionicons
                  name="alert-circle-outline"
                  color={DRAWER_COLOR}
                  size={DRAWER_ICON_SIZE}
                />
              )}
              label={() => <Text style={styles.drawerLabel}>Help & About</Text>}
              onPress={() => true}
            />
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => (
            <Ionicons
              name="exit-outline"
              color={DRAWER_COLOR}
              size={DRAWER_ICON_SIZE}
            />
          )}
          label={() => <Text style={styles.drawerLabel}>Sign Out</Text>}
          onPress={() => true}
        />
      </View>
    </View>
  );
};

export default DrawerContent;
