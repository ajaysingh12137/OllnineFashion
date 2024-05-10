import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#040046',
      }}>
        <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'default'}
      />
      <Image
        source={require('../../assets/images/logo1.png')}
        style={{width: 350, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
