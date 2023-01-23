import React, { useState } from 'react';
import { FlatList, Image, View, Text,TouchableOpacity, StyleSheet } from 'react-native';

const images = [
  { id: 1, source: require('./assets/a.jpg') },
  { id: 2, source: require('./assets/c.png') },
  { id: 3, source: require('./assets/w.jpg') },
  { id: 4, source: require('./assets/h.jpg') },
  { id: 5, source: require('./assets/a.jpg') },
  { id: 6, source: require('./assets/h.jpg') },
  { id: 7, source: require('./assets/a.jpg') },
  { id: 8, source: require('./assets/c.png') },
  { id: 9, source: require('./assets/w.jpg') },
  { id: 10, source: require('./assets/h.jpg') },
  { id: 5, source: require('./assets/a.jpg') },
  { id: 6, source: require('./assets/h.jpg') },
];

export default function de() {
  // const [selectedId, setSelectedId] = useState(null);

  // const onPress = (id) => {
  //   setSelectedId(id);
  // };

  const renderItem =  item  => {
    return <Text>{item.item.id}</Text>

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
      numColumns={1}
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
  selected: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
  },
});
