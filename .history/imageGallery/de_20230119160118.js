import React, { useState } from 'react';
import { FlatList, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import i from './api/i.json';
const images = require('./api')

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
    borderRadius: 4,
  },
});
