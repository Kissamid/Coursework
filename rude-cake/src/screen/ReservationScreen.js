import  React, {useState, Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text, StyleSheet, TextInput, Button, Modal, Image, Alert, TouchableOpacity} from  'react-native' 
import { AntDesign, Ionicons} from '@expo/vector-icons';

import {App} from '../../connection/connection'

export default class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectAll: false,
      cartItemLoading: false,
      cartItems:[
        {itemId:'1', name:'Burger', thumbnailImage: 'https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=6&m=1188412964&s=612x612&w=0&h=860S0kVoWTA60T4wakI8HLv-Y3fFw9jOKLSB4quEkIE=', salePrice:'80'}
      ]
    }
  }
}

export function ReservationScreen(){

const[name, setName] = useState('')
const[lastName, setLastName] = useState('')
const[table, setTable] = useState('')
const[newtable, setNewTable] = useState('')
const[modalVisible, setModalVisible] = useState(false)
const[data, setData] = useState('')
const[menuVisible, setMenuVisible] = useState(false)


const saveHandler = () => {
            if(table.trim().length < 1)
            {
                Alert.alert('ПОМИЛКА!', `Мінімальна довжина назви 3 символи. 
                Зараз ${table.trim().length} символів.`)
            }
            else
            {
               setTable("Ви обрали столик №" + table)
               setModalVisible(false)
            }
        }

        const cancelHandler = () =>{
            setModalVisible(false)  
        }

    return(
<View>      
      <View style = {styles.headerStyle}>
        <Text style ={styles.text}>Make Rezervation</Text>
      </View>

      <View style ={styles.holder}>
                 
                  <View style = {styles.input}>
                    <TextInput
                                  value = {name}
                                  onChangeText = {setName}
                                  placeholder = "Введіть ім'я"
                                  autoCapitalize= 'words'
                                  autoCorrect = {false}
                                  maxLength = {30}
                                  />
                  </View>

                  <View style = {styles.input} >
                    <TextInput
                                value = {lastName}
                                onChangeText = {setLastName}
                                placeholder = "Введіть прізвище"
                                autoCapitalize= 'words'
                                autoCorrect = {false}
                                maxLength = {30}
                    />
                  </View>
                  
               <View style = {styles.input}>   
                  <View style= {styles.block}>
                    <TextInput                  
                                    value = {table}
                                    onChangeText = {setNewTable}
                                    placeholder = "Натисніть кнопку, щоб вибрати столик"
                                    autoCapitalize= 'words'
                                    autoCorrect = {false}
                                    maxLength = {30}
                      />
                      <AntDesign
                       name="pluscircleo" 
                       size = {24} 
                       color= 'black' 
                       onPress = {() => setModalVisible(true)} /> 
                      
                  </View>
                </View>

                <View>
                  <Modal
                          animationType = "slide"
                          transparent = {false}
                          visible = {modalVisible}
                          >
                    <View style ={styles.center}>
                         <Image
                              style = {styles.image}
                              source = {require('../../assets/rest.jpg')}
                              />
                              <TextInput
                                 value = {table}
                                onChangeText = {setTable}
                                style={styles.input}
                                placeholder = 'Виберіть столик...'
                                keyboardType = "numeric"
                                maxLength = {5}  
                                />
                                <Button
                                  title = "Зберегти"
                                  onPress = {saveHandler}
                                />
                                <Button
                                  title = "Скасувати"
                                  onPress = {cancelHandler}
                                />
                            
                    </View>
                  </Modal>
                </View>

                <View style = {styles.input}>
                    <View style = {styles.block}>
                     <TextInput                  
                                    value = {data}
                                    onChangeText = {data}
                                    placeholder = "Натисніть кнопку, щоб обрати дату"
                                    autoCapitalize= 'words'
                                    autoCorrect = {false}
                                    maxLength = {30}
                      />
                 <AntDesign
                       name="pluscircleo" 
                       size = {24} 
                       color= 'black' 
                       onPress = {() => setModalVisible(true)} /> 
                    </View>

                </View>


                <View>
                    <Button 
                      title = "Натисніть, щоб відкрити меню"
                      onPress = {() => setMenuVisible(true)}
                    />

                    <Modal
                          animationType = "slide"
                          transparent = {false}
                          visible = {menuVisible}>

                        <View>
                              <View style = {styles.menuHeader}>
                                    <TouchableOpacity>
                                      <Ionicons 
                                      name="arrow-back-outline" 
                                      size={24} 
                                      color="black" 
                                      onPress = {() => setMenuVisible(false)}/>
                                    </TouchableOpacity>
                              </View>
                              
                              <App/>

                        </View>

                    </Modal>
                </View>

      </View>
</View>
)
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '80%'
  },
   holder:{
     marginTop: 25,
     alignItems: 'center',
    justifyContent: 'center',
    },
    headerStyle:{ 
      backgroundColor: "#9AC4F8",
      height: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
      fontSize: 16,
      marginTop: 30,
      fontWeight: "bold",
      color: 'white'
    },
    image:{
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
},
center: {
  justifyContent: 'flex-start',
  alignItems: 'center'
},
block:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
    },
menuHeader:{
    backgroundColor: "#9AC4F8",
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
 }
})
