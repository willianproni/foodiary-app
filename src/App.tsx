import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/host-grotesk";

import "./styles/global.css";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { HomeHeader } from "./components/HomeHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
    HostGrotesk_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="flex-1 bg-white">
      <SafeAreaProvider>
        <HomeHeader />
      </SafeAreaProvider>
    </View>
  );
}
