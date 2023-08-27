import { Image, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";

export function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ url: selectMeal.imageUrl }}></Image>
      <Text>{selectMeal.title}</Text>
      <MealDetails
        duration={selectMeal.duration}
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
      />
      <View></View>
      <Text>Ingredients</Text>
      {selectMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <Text>Steps</Text>
      {selectMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>))}
    </View>
  );
}
