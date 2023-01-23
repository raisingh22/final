import React, { useState } from 'react';
import { FlatList, Image, View, TouchableOpacity, StyleSheet } from 'react-native';

const images = [
  { id: 1, source: require('./assets/.jpg') },
  { id: 2, source: require('./assets/image2.jpg') },
  { id: 3, source: require('./assets/image3.jpg') },
  { id: 4, source: require('./assets/image4.jpg') },
  { id: 5, source: require('./assets/image5.jpg') },
  { id: 6, source: require('./assets/image6.jpg') },
];

export default function de() {
  const [selectedId, setSelectedId] = useState(null);

  const onPress = (id) => {
    setSelectedId(id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <View style={styles.imageContainer}>
        <Image source={item.source} style={styles.image} />
        {selectedId === item.id && <View style={styles.selected} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
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
    borderRadius: 10,
  },
});
