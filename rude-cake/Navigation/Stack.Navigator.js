import React, {useEffect, useState, Component} from "react";
import {NavigationContainer} from '@react-navigation/native'
//import {createStackNavigator} from '@react-navigation/stack'
import {View, Text, StyleSheet, TabBarIOS, TouchableOpacity, Button, Alert, FlatList, StatusBar} from  'react-native' 
import { SliderBox } from "react-native-image-slider-box";
import { createStackNavigator } from "@react-navigation/stack";
import MapView from 'react-native-maps'
import { MyComponents} from '../App'
import {Calendar} from 'react-native-calendars';
import * as firebase from 'firebase'
import LoginScreen from "react-native-login-screen";



const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('Slot', { bookingDate : day })
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View >
        <TouchableOpacity onPress={() => this._onPressBack() }><Text>Back</Text></TouchableOpacity>
                    <Text></Text>
                    <Text ></Text>
      </View>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: 'green',
            todayTextColor: 'green',
            arrowColor: 'green',
          }}
        />
      </View>
    );
  }
}

export function HomeScreen(){
    this.state ={
      images: [
        "https://www.ratusha.if.ua/wp-content/uploads/2020/12/132032170_3837111182979635_7698293740391251030_o.jpg",
        "https://rau.ua/wp-content/uploads/2018/03/croissant.jpg",
        "https://cdn1.pokupon.ua/uploaded/merchant_page_images/54441/data/large1200/xE3xEBxE0xE2xEDxE0xFF__1.jpg?1516232412",
      ]
    }
    return(
        <View>
            <SliderBox 
              images={this.state.images}
              
              autoplay
              circleLoop
              sliderBoxHeight = {350}
              />
            <Button style = {styles.button}
              title="Make a reservation"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
        
    )
}

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

export function ReservationScreen(){
    return(
        <View>
        </View>
    )
}

export function FavouriteScreen(){
    return(
        <View>
            <Text>MyComponents</Text>
        </View>
    )
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={ReservationScreen} />
    </Stack.Navigator>
  );
}

const FavouriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favourite" component={FavouriteScreen} />
    </Stack.Navigator>
  );
}

const MapStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

const ReservationStackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name = "Reserved" component={Calc}/>
    </Stack.Navigator>
  )
}
const CalendarStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Make a Reservation" component={ReservationScreen} />
    </Stack.Navigator>
  );
}



const styles = StyleSheet.create({
    button: {
      allignSelf: 'flex-end',
      position: 'absolute',
      left: 50,
      bottom: 35,
    },
    container: {
    flex: 1
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  }
})

export { MainStackNavigator, FavouriteStackNavigator, MapStackNavigator, ReservationStackNavigator, CalendarStackNavigator};