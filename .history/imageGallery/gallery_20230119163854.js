import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, AsyncStorage } from 'react-native';

const Gallery = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch('assets/images.json')
        .then(response => response.json())
        .then(data => setImageData(data))
        .catch(error => console.log(error))
  }, []);

  return (
    <View>
      <ScrollView>
        {imageData.map(image => (
          <View key={image.id}>
            <Image source={{ uri: image.url }} style={{ width: '100%', height: 200 }} />
            <Text>{image.t}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Gallery;
