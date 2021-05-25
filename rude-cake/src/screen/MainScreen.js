import  * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
//import {createStackNavigator} from '@react-navigation/stack'
import {View, Text, StyleSheet, TabBarIOS, TouchableOpacity, Button, Alert} from  'react-native' 
import { SliderBox } from "react-native-image-slider-box";

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

const styles = StyleSheet.create({
    button: {
      allignSelf: 'flex-end',
      position: 'absolute',
      left: 50,
      bottom: 35,
    }
})