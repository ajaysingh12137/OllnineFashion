import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from '../TabScreen/HomeScreen';
import Category from '../TabScreen/Category';
import MoreBrands from '../TabScreen/Discover';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Profile from '../TabScreen/Profile';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarActiveBackgroundColor: 'lavender',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: focused ? '#040046' : 'grey',
                marginBottom: 5,
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused, size, color}) => (
            <FontAwesome
              name="home"
              color={focused ? '#040046' : 'grey'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarActiveBackgroundColor: 'lavender',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: focused ? '#040046' : 'grey',
                marginBottom: 5,
              }}>
              Category
            </Text>
          ),
          tabBarIcon: ({focused, size, color}) => (
            <MaterialIcons
              name="category"
              color={focused ? '#040046' : 'grey'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MoreBrands"
        component={MoreBrands}
        options={{
          tabBarActiveBackgroundColor: 'lavender',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: focused ? '#040046' : 'grey',
                marginBottom: 5,
              }}>
              Discover
            </Text>
          ),
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name="compass-outline"
              color={focused ? '#040046' : 'grey'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveBackgroundColor: 'lavender',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: focused ? '#040046' : 'grey',
                marginBottom: 5,
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused, size, color}) => (
            <Feather
              name="user"
              color={focused ? '#040046' : 'grey'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
