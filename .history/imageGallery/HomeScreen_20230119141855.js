import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import userList from './api/userList.json';
function HomeScreen() {
    
let users = require ('./api/userList.json');
    return (
      <View 
      style={{  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Image Screen </Text>
        <FlatList
            data={users}
            renderItem={({item}
        />
      </View>
    );
  }
  
  
  export default HomeScreen;