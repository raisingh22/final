import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import userList from './api/userList.json';
let users = require ('./api/userList.json');
function HomeScreen() {
    return (
      <View 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <FlatList
            data={users}
            renderItem={this.renderImages}
        />
      </View>
    );
  }
  
  
  export default HomeScreen;