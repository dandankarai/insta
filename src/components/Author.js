import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { Avatar } from 'react-native-paper'

export default props => {
  return (
    <View style={styles.container}>

      <Avatar.Image size={35} source={require('../../assets/foto1.png')} style={styles.avatar} />

      <Text style={styles.nickname}> {props.nickname} </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },

  nickname: {
    color: '#444',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
})