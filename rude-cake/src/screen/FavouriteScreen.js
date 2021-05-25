import  * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text, StyleSheet} from  'react-native' 

export function FavouriteScreen(){
    return(
        <View style={styles.screen}>
            <Text>Favourite!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})