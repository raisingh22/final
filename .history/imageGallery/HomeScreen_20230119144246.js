import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import userList from './api/userList.json';
let users = require ('./api/userList.json');
const renderItem = ({ item }) => (
    <Image
      style={styles.image}
      source={{ uri: item.image }}
    />
  );
function HomeScreen() {
    
let users = require ('./api/userList.json');

    return (
      <View 
      style={{  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Image Screen </Text>
        <View>
        <Image source={{uri: item.item.image}}>

        </Image></View>
        <FlatList
        keyExtractor={(item , id)=> id.toString()}
            data={users}
            renderItem={({image})=>{
                return            
            }}
        />
      </View>
    );
  }
  
  
  export default HomeScreen;