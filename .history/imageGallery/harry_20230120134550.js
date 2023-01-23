import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import axios from 'axios';

/const API_KEY = 'vFFzwbcuTWrUA2ebLcgP7PXg1zkK58nckqORmGAjPXwVFZynbcTsoefo';
const API_URL = `https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo`;

const harry = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const randomImage = response.data.hits[Math.floor(Math.random() * response.data.hits.length)];
        setImageUrl(randomImage.webformatURL);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default harry;
