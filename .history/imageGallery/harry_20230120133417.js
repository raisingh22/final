import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import axios from 'axios';

const API_KEY = 'your_api_key';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;

const ExampleImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const randomImage = response.data.hits[Math.floor(Math.random() * response.data.hits.length)];
        setImageUrl(randomImage.webformatURL);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  },
