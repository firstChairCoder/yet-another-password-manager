import { createStackNavigator } from "@react-navigation/stack";

import { CreateEditFormScreen } from "../screens";

const PasswordStack = createStackNavigator();
function PasswordStackNavigator() {
  return (
    <PasswordStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <PasswordStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Password Manager" }}
      /> */}
      {/* <PasswordStack.Screen
        name="singleDetail"
        component={SingleDetailScreen}
        options={{ title: "Password" }}
      /> */}
      <PasswordStack.Screen
        name="HelloForm"
        component={CreateEditFormScreen}
        options={{
          title: "",
          headerStyle: { backgroundColor: "#FFDE03", elevation: 0 },
          headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: "#121212",
          gestureEnabled: true,
          headerBackTitleVisible: false
        }}
      />
    </PasswordStack.Navigator>
  );
}

export { PasswordStackNavigator };
