import {
  Platform,
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { FocusAwareStatusBar } from "../components";

export const SingleDetailScreen = () => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const [passwordType, setPasswordType] = useState<string>("");
  return (
    <View
      style={{ backgroundColor: "#F9F9F9", flex: 1, height: SCREEN_HEIGHT }}
    >
      <FocusAwareStatusBar
        barStyle={"light-content"}
        backgroundColor={Platform.OS === "android" ? "#FFC000" : undefined}
      />
      <View
        style={{
          backgroundColor: "#FFDE03",
          height: 190,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20
        }}
      >
        <Pressable>
          <Ionicons color={"#121212"} name="arrow-back-outline" size={25} />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 24,
            width: "100%"
          }}
        >
          <View style={{ width: "70%" }}>
            <Text
              style={{ fontSize: 28, color: "#121212", fontWeight: "bold" }}
            >
              {passwordType}
            </Text>
          </View>

          <View style={{ width: "30%", alignItems: "flex-end" }}>
            <Pressable
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0336FF",
                borderRadius: 25,
                elevation: 1.5
              }}
            >
              <Ionicons name="add-outline" color={"#FFF"} size={30} />
            </Pressable>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFF",
          padding: 20,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          elevation: 3,
          marginBottom: 16,
          borderRadius: 16,
          marginTop: -24
        }}
      >
        <TextInput
          style={{ fontWeight: "bold", fontSize: 18, width: 260 }}
          placeholder="Search"
          onChangeText={() => true}
        />
        <Ionicons name="search-outline" color={"#0336FF"} size={20} />
      </View>
    </View>
  );
};
