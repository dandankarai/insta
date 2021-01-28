import React from 'react';
import { Text, View } from 'react-native';


import Header from './src/components/Header'
import Post from './src/components/Post';

export default function App() {
  return (

    <View>
      <Header style={{flex : 1}} />
      <Post image={require('./assets/foto1.png')} />
    </View>
  );
}

