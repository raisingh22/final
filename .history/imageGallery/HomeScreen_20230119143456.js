import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import userList from './api/userList.json';
function HomeScreen() {
    
let users = require ('./api/userList.json');
    return (
      <View 
      style={{  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Image Screen </Text>
        <View>
        <Image >

        </Image></View>
        <FlatList
        keyExtractor={}
            data={users}
            renderItem={({})=>{
                return            
            }}
        />
      </View>
    );
  }
  
  
  export default HomeScreen;