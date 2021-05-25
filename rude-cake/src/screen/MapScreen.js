import  * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text, StyleSheet} from  'react-native' 
import MapView from 'react-native-maps'

export function MapScreen(){
    return (      
      <MapView        
        style={{flex: 1}}        
        region={{          
          latitude: 42.882004,          
          longitude: 74.582748,          
          latitudeDelta: 0.0922,          
          longitudeDelta: 0.0421        
        }}        
        showsUserLocation={true}/>    
        );  
    }

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})