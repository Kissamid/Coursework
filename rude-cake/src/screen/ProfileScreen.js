
import  * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {View, Text, StyleSheet, TabBarIOS} from  'react-native' 

export function ProfileScreen(){
    return(
        <View style = {styles.screen}>
            <Text>USer!</Text>
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