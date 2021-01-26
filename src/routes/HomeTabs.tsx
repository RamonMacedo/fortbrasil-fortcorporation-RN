import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Account from '../pages/Account';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
          marginTop: 15,
          paddingTop: 15,
        },
        labelStyle: {
          fontFamily: 'OpenSans-Regular',
          fontSize: 12,
          color: '#5D5D5D',
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Estabelecimentos',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon
                name="home"
                size={size}
                color={focused ? '#FC823F' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Conta"
        component={Account}
        options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Icon
                name="user"
                size={size}
                color={focused ? '#FC823F' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default HomeTabs;
// list, user, file-text, home
