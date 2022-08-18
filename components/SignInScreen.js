import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import logo from '../assets/images/logo.jpeg';
import CustomInput from './CustomInput/CustomInput';
import CustomButton from './CustomButton/CustomButton';

function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPress = () => {
    console.warn("Sign in")
  }

  return (
    <View style={styles.root}>
      <Image 
        source={logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode="contain"  
      />

      <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue={setUsername}
      />
      <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton text="Sign In" onPress={onSignInPress} />
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
