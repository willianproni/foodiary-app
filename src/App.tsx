import { View } from "react-native";

import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/host-grotesk";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DailyStats } from "./components/DailyStats";
import { DateSwitcher } from "./components/DateSwitcher";
import { HomeHeader } from "./components/HomeHeader";
import { MealsList } from "./components/MealsList";
import "./styles/global.css";

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
        <DateSwitcher />
        <View className="mt-2">
          <DailyStats
            calories={{
              current: 500,
              goal: 2500,
            }}
            proteins={{
              current: 2000,
              goal: 2500,
            }}
            carbohydrates={{
              current: 500,
              goal: 2500,
            }}
            fats={{
              current: 500,
              goal: 2500,
            }}
          />
        </View>

        <View className="h-px bg-gray-200 mt-7" />
        
        <MealsList/>

      </SafeAreaProvider>
    </View>
  );
}
