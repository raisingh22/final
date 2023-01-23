import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, AsyncStorage, TextInput , Tou} from 'react-native';

const Gallery = () => {
  const [imageData, setImageData] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const images = await AsyncStorage.getItem('images');
      if (images) {
        setImageData(JSON.parse(images));
      } else {
        fetch('assets/images.json')
          .then(response => response.json())
          .then(data => {
            setImageData(data);
            AsyncStorage.setItem('images', JSON.stringify(data));
          })
          .catch(error => console.log(error))
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addImage = async () => {
    try {
      const newImage = {
        id: imageData.length + 1,
        url: imageUrl,
        caption: 'New Image'
      };
      const newImages = [...imageData, newImage];
      setImageData(newImages);
      setImageUrl('');
      await AsyncStorage.setItem('images', JSON.stringify(newImages));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <TextInput
        value={imageUrl}
        onChangeText={text => setImageUrl(text)}
        placeholder="Enter image URL"
      />
      <TouchableOpacity onPress={addImage}>
        <Text>Add Image</Text>
      </TouchableOpacity>
      <ScrollView>
        {imageData.map(image => (
          <View key={image.id}>
            <Image source={{ uri: image.url }} style={{ width: '100%', height: 200 }} />
            <Text>{image.caption}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Gallery;
