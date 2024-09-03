import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { FocusAwareStatusBar } from "../components";

const styles = StyleSheet.create({
  passwordType: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: "row",
    height: 30,
    justifyContent: "center",
    marginHorizontal: 12,
    width: 100
  },
  passwordTypeText: { paddingLeft: 4 },
  formWrapper: { marginBottom: 24 },
  input: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 4
  },
  inputLabel: { paddingVertical: 0 }
});

export const CreateEditFormScreen = () => {
  const [passwordType, setPasswordType] = useState(1);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FFF" }}
      behavior={Platform.OS === "android" ? "padding" : undefined}
    >
      <FocusAwareStatusBar
        barStyle={"light-content"}
        backgroundColor={Platform.OS === "android" ? "#FFC000" : undefined}
      />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 20, paddingVertical: 12 }}
        >
          <Pressable
            style={[
              styles.passwordType,
              { borderColor: passwordType === 1 ? "red" : "gray" }
            ]}
          >
            <Ionicons
              name="body-outline"
              size={20}
              color={passwordType === 1 ? "red" : "gray"}
            />
            <Text
              style={[
                styles.passwordTypeText,
                { color: passwordType === 1 ? "red" : "gray" }
              ]}
            >
              Personal
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.passwordType,
              { borderColor: passwordType === 2 ? "purple" : "gray" }
            ]}
          >
            <Ionicons
              name="airplane-outline"
              size={20}
              color={passwordType === 2 ? "purple" : "grey"}
            />
            <Text
              style={[
                styles.passwordTypeText,
                { color: passwordType === 2 ? "purple" : "gray" }
              ]}
            >
              Travel
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.passwordType,
              { borderColor: passwordType === 3 ? "blue" : "gray" }
            ]}
          >
            <Ionicons
              name="business-outline"
              size={20}
              color={passwordType === 3 ? "blue" : "grey"}
            />
            <Text
              style={[
                styles.passwordTypeText,
                { color: passwordType === 3 ? "blue" : "gray" }
              ]}
            >
              Work
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.passwordType,
              { borderColor: passwordType === 4 ? "green" : "gray" }
            ]}
          >
            <Ionicons
              name="cash-outline"
              size={20}
              color={passwordType === 4 ? "green" : "grey"}
            />
            <Text
              style={[
                styles.passwordTypeText,
                { color: passwordType === 4 ? "green" : "gray" }
              ]}
            >
              Finance
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.passwordType,
              { borderColor: passwordType === 5 ? "yellow" : "gray" }
            ]}
          >
            <Ionicons
              name="cart-outline"
              size={20}
              color={passwordType === 5 ? "yellow" : "grey"}
            />
            <Text
              style={[
                styles.passwordTypeText,
                { color: passwordType === 5 ? "yellow" : "gray" }
              ]}
            >
              Shopping
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.passwordType,
              { borderColor: passwordType === 6 ? "pink" : "gray" }
            ]}
          >
            <Ionicons
              name="share-social-outline"
              size={20}
              color={passwordType === 6 ? "pink" : "grey"}
            />
            <Text
              style={[
                styles.passwordTypeText,
                { color: passwordType === 6 ? "pink" : "gray" }
              ]}
            >
              Social
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.passwordType,
              { borderColor: passwordType === 7 ? "orange" : "gray" }
            ]}
          >
            <Ionicons
              name="medical-outline"
              size={20}
              color={passwordType === 7 ? "orange" : "grey"}
            />
            <Text
              style={[
                styles.passwordTypeText,
                { color: passwordType === 7 ? "orange" : "gray" }
              ]}
            >
              Others
            </Text>
          </Pressable>
        </ScrollView>
        {/* <Formik> */}
        <View style={{ marginHorizontal: 16 }}>
          <View style={styles.formWrapper}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput style={styles.input} value="" />
          </View>

          <View style={styles.formWrapper}>
            <Text style={styles.inputLabel}>webAddress</Text>
            <TextInput style={styles.input} value="" />
          </View>

          <View style={styles.formWrapper}>
            <Text style={styles.inputLabel}>Username/email/id</Text>
            <TextInput style={styles.input} value="" />
          </View>

          <View style={styles.formWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.input} value="" />

            <Pressable style={{ position: "absolute", right: 35, top: 20 }}>
              <Ionicons
                name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                color={"green"}
                size={25}
              />
            </Pressable>

            <Pressable style={{ position: "absolute", right: 5, top: 20 }}>
              <Ionicons name={"clipboard-outline"} color={"green"} size={25} />
            </Pressable>
          </View>

          <View style={styles.formWrapper}>
            <Text style={styles.inputLabel}>Note</Text>
            <TextInput style={styles.input} value="" />
          </View>

          <View>
            <Button title={"Save"} color={"#0336FF"} />
          </View>
        </View>
        {/* </Formik> */}
      </View>
    </KeyboardAvoidingView>
  );
};
