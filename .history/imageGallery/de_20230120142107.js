import React, { Component, useState } from 'react';
import { FlatList, Dimensions,Image, View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
let images = require ('./api/image.json');


let {width: screenWidth, height: screenHeight}= Dimensions.get('window')
class AnimatedImages extends Component{
  render() {
  
    return(
      <Animatable.View style={{flex:}}
    )
  }
}
// const images = [
//   { id: 1, source: require('./assets/a.jpg') },
//   { id: 4, source: require('./assets/c.png') },
//   { id: 3, source: require('./assets/w.jpg') },
//   { id: 4, source: require('./assets/h.jpg') },
//   { id: 5, source: require('./assets/a.jpg') },
//   { id: 6, source: require('./assets/h.jpg') },
//   { id: 7, source: require('./assets/a.jpg') },
//   { id: 8, source: require('./assets/c.png') },
//   { id: 9, source: require('./assets/w.jpg') },
//   { id: 10, source: require('./assets/h.jpg') },
//   { id: 11, source: require('./assets/a.jpg') },
//   { id: 12, source: require('./assets/h.jpg') },
// ];

export default function de() {
  // const [selectedId, setSelectedId] = useState(null);

  // const onPress = (id) => {
  //   setSelectedId(id);
  // };

  const renderItem =  item  => {
    return (
    <View style={{flex:1 ,alignItems:"center"}}>
{/* <Text>{item.item.id}</Text> */}
      <Image source={{uri : item.item.source} } 
      style={{
        height: screenWidth/4,
      width: screenWidth/4,}} />
    </View>
    )
    // <TouchableOpacity >
    //   <View style={styles.imageContainer}>
    //     <Image source={item.source} style={styles.image} />
    //     {/* {selectedId === item.id && <View style={styles.selected} 

    //     />} */}
    //   </View>
    // </TouchableOpacity>
  }

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      horizontal={false}
      keyExtractor={item => item.id.toString()}
      numColumns={4}
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
 
});
