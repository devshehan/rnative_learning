import { NavigationContainer } from "@react-navigation/native";
// screens
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}
