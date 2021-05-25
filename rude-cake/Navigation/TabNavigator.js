import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AntDesign, Entypo, MaterialIcons} from '@expo/vector-icons'

import {HomeScreen} from '../src/screen/MainScreen'
import {MapScreen} from '../src/screen/MapScreen'
import {FavouriteScreen} from '../src/screen/FavouriteScreen'
import {ReservationScreen} from '../src/screen/ReservationScreen'
import {ProfileScreen} from '../src/screen/ProfileScreen'
import {MainStackNavigator, FavouriteStackNavigator, MapStackNavigator, ReservationStackNavigator, CalendarStackNavigator} from './Stack.Navigator'
import {Calc} from '../src/screen/Calendar'


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
       <Tab.Screen 
                        name='Home' 
                        component={MainStackNavigator} 
                        options={{tabBarIcon: ({ color }) =>(<AntDesign name="home" size={30} color="black" />)}}
                        
            />
            <Tab.Screen 
                        name = 'Location'
                        component={MapStackNavigator}
                        options={{tabBarIcon: ({ color }) =>(<Entypo name="location" size={30} color="black" />)}}
            />
            <Tab.Screen 
                        name = 'Calendar' 
                        component={ReservationScreen}
                        options={{tabBarIcon: ({ color }) =>(<Entypo name="calendar" size={30} color="black" />)}}
            />
            <Tab.Screen 
                        name = 'Rezervation' 
                        component={ReservationStackNavigator}
                        options={{tabBarIcon: ({ color }) =>(<Entypo name="calendar" size={30} color="black" />)}}
            />
                    
            <Tab.Screen 
                        name = 'Favourite' 
                        component={FavouriteStackNavigator}
                        options={{tabBarIcon: ({ color }) =>(<MaterialIcons name="favorite" size={30} color="red" />)}}
                        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;