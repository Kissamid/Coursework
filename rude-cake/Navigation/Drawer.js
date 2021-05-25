import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";

import {HomeScreen} from '../src/screen/MainScreen'
import {MapScreen} from '../src/screen/MapScreen'
import {FavouriteScreen} from '../src/screen/FavouriteScreen'
import {ReservationScreen} from '../src/screen/ReservationScreen'
import {ProfileScreen} from '../src/screen/ProfileScreen'
import {FavouriteStackNavigator } from './Stack.Navigator'


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name = 'Location' component={MapScreen} />
      <Drawer.Screen name = 'Favorite' component={FavouriteStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;