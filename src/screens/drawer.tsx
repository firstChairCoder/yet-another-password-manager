import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "../components";
import { PasswordStackNavigator } from "../navigation/stack-navigators";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Screen name="password" component={PasswordStackNavigator} />
    </Navigator>
  );
};

export default DrawerScreen;
