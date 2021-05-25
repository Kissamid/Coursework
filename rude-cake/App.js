import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import{createDrawerNavigator} from '@react-navigation/drawer'
import {AntDesign, Entypo, MaterialIcons} from '@expo/vector-icons'

import DrawerNavigator from './Navigation/Drawer'

import {HomeScreen} from './src/screen/MainScreen'
import {MapScreen} from './src/screen/MapScreen'
import {FavouriteScreen} from './src/screen/FavouriteScreen'
import {ReservationScreen} from './src/screen/ReservationScreen'
import {ProfileScreen} from './src/screen/ProfileScreen'
import {Authorization} from './src/screen/Authorization'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer >
      <DrawerNavigator/>  
    </NavigationContainer>
  );
}


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://3a8562395df3.ngrok.io/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Downoload...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.restaurants}
            </li>
          ))}
        </ul>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
