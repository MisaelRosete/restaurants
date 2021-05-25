import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TopRestaurants from '../screens/TopRestaurants'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
       <NavigationContainer>
           <Tab.Navigator>
              <Tab.Screen
               name="restaurants"
               component={Restaurants}
               options={{title:"Restaurants"}}
               />
               <Tab.Screen
               name="favorites"
               component={Favorites}
               />
               <Tab.Screen
               name="top-restaurants"
               component={TopRestaurants}
               />
               <Tab.Screen
               name="search"
               component={Search}
               />
               <Tab.Screen
               name="account"
               component={Account}
               />
           </Tab.Navigator>



       </NavigationContainer>
    )
}
