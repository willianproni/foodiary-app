import { Text, View } from "react-native";
import { MealCard } from "./MealCard";

export function MealsList() {
  return (
    <View className="p-5">
      <Text className="text-black-700 text-base font-sans-medium tracking-[1.28px]">
        REFEIÇÕES
      </Text>

      <View className="gap-8 mt-4">
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
      </View>
    </View>
  );
}
