import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

export function MealsOverviewScreen() {
    return (
        <View style>
            <Text>Meals OverView Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:16
    }
})