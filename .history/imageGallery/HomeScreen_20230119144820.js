import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import userList from './api/userList.json';
const users = [
    
]
const renderItem = ({ item }) => (
    <Image
      style={styles.image}
      source={{ uri: item.image }}
    />
  );
function HomeScreen() {
    
    return (
      <View 
      style={{  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Image Screen </Text>
       
        <FlatList
            data={users}

            renderItem={renderItem}
               keyExtractor={item=> item.id.toString()}
              
            
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
  });
  export default HomeScreen;