import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator
} from "@react-navigation/stack";

import DrawerScreen from "../screens/drawer";

const { Navigator, Screen } = createStackNavigator();
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          gestureEnabled: true,
          headerMode: "float",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: "#FFF",
          headerBackTitleVisible: false
        }}
      >
        <Screen
          name="App"
          component={DrawerScreen}
          options={{ title: "", headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
