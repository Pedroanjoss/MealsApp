import { Text } from "react-native";

export function MealDetailScreen({route}) {
    const mealId = route.params.mealId
    return(
        <Text>This is meal {mealId}</Text>
    )
}