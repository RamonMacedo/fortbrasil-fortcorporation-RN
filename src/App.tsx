import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import {MenuProvider} from 'react-native-popup-menu';
import AppProvider from './hooks';

import Routes from './routes/index';

const App: React.FC = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
    backdrop: {
      backgroundColor: '#F9F9F9',
      opacity: 0.5,
    },
  });

  const menuProviderStyles = {
    menuProviderWrapper: styles.container,
    backdrop: styles.backdrop,
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#FC823F" />
      <AppProvider>
        <MenuProvider customStyles={menuProviderStyles}>
          <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
            <Routes />
          </View>
        </MenuProvider>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
