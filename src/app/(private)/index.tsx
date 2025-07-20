import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "../../screens/Home";

export default function Page() {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </View>
  );
}
