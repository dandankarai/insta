import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';

import icon from '../../assets/favicon.png'

class Header extends Component {
  render(){
    return(
      <SafeAreaView style={styles.container}>

        <View style={styles.rowContainer}>
          
          <Image source={icon} style={styles.image}></Image>
          <Text style={styles.title}> Instagram Clone </Text>

        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding:10,
    borderBottomWidth:1,
    borderColor:'blue',
  },

  rowContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  image:{
    height:30,
    width:30,
    resizeMode: 'contain',
    margin:5
  },

  title:{
    color: '#000',
    height:30,
    fontSize:19,
    fontWeight: 'bold'
  },

})

export default Header;