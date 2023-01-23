import React, { useState ,useEffect} from 'react';
import { FlatList, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import images from './assets/images.json';


export default function de() {
    useEffect(() => {
        fetch('assets/images.json')
            .then(response => response.json())
            .then(data => setImageData(data))
            .catch(error => console.log(error))
    }, []);
  const [selectedId, setSelectedId] = useState(null);

  const onPress = (id) => {
    setSelectedId(id);
  };

  const renderItem = ({ item }) => (
    // <TouchableOpacity onPress={() => onPress(item.id)}>
    //   <View style={styles.imageContainer}>
    //     <Image source={item.source} style={styles.image} />
    //     {selectedId === item.id && <View style={styles.selected} />}
    //   </View>
    // </TouchableOpacity>
    <Scr
    {imageData.map(image => (
        <View key={image.id}>
          <Image source={{ uri: image.url }} style={{ width: '100%', height: 200 }} />
          <Text>{image.caption}</Text>
        </View>
      ))}
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
