import { Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Button } from "../../../components/Button";

export default function Page() {
  const {mealId} = useLocalSearchParams();
  
    return (
    <View className="flex-1 items-center justify-center">
      <Text>Meals screen: {mealId}</Text>

      <Button onPress={router.back}>Voltar</Button>
    </View>
  );
}
