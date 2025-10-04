import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "../global.css";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Raleway-Black": require("../assets/fonts/Raleway-Black.ttf"),
    "NunitoSans": require("../assets/fonts/NunitoSans.ttf"),
    "Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf")
  });

  if (!fontsLoaded) return null; // or splash
  return(
<>
  <StatusBar hidden={true} />
  <Stack screenOptions={{headerShown:false}}  />;
</>

)
}
