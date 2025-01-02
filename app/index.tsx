import HomeScreen from "@/src/screens/HomeScreen";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import MainNavigation from '../src/navigation/MainNavigation'
import { useFonts } from "expo-font";
import { View } from "react-native";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar"
import { Color } from "@/src/Theme/Color";


export default function Index() {
  const [fontsLoaded] = useFonts({
    "Satoshi-Bold": require("../assets/fonts/Satoshi-Bold.otf"),
    "Satoshi-Light": require("../assets/fonts/Satoshi-Light.otf"),
    "Satoshi-Medium": require("../assets/fonts/Satoshi-Medium.otf"),
    "Satoshi-Regular": require("../assets/fonts/Satoshi-Regular.otf"),
  });
  console.log({ fontsLoaded });
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(Color.background);

  }, [])


  return (

    <View style={{ flex: 1 }}>
      {fontsLoaded ? <NavigationIndependentTree  >
        <NavigationContainer
        >
          <MainNavigation />
        </NavigationContainer>
      </NavigationIndependentTree> : <View></View>}
    </View>

  );
}
