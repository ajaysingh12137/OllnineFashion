import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Text>Onboarding</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={{
          backgroundColor: '#040046',
          height: 50,
          width: 100,
          borderRadius: 10,
          justifyContent: 'center',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: '500', fontSize: 15}}>
          Press Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;
