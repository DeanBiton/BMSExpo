import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import logo from '../assets/images/logo.jpeg';
import CustomInput from './CustomInput/CustomInput';

function SignInScreen() {
  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image 
        source={logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode="contain"  
      />

      <CustomInput />
      <CustomInput />
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: '45%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
