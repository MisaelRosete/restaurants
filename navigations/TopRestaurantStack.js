import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import TopRestaurantStack from '../screens/TopRestaurantStack'

const Stack = createStackNavigator()

export default function TopRestaurantStack (){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="top-restaurant"
            component={TopRestaurantStack}
            options={{ title: "Restaurantes Top" }}
            />

        </Stack.Navigator>
    )
}
