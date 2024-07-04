import {
  createNavigationContainerRef,
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {AppState, type AppStateStatus, useColorScheme} from 'react-native';
import {HomeScreen} from './home';
import type {RootStackParamList} from './types.ts';
import BootSplash from 'react-native-bootsplash';
import {getCategories} from '../services/api.ts';
import {colors} from '../ui';

let currentState = AppState.currentState;

const navigationContainerRef =
  createNavigationContainerRef<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    getCategories().then(async () => {
      await BootSplash.hide();
    });
  }, []);

  useEffect(() => {
    const onAppStateChange = async (nextState: AppStateStatus) => {
      if (currentState.match(/inactive|background/) && nextState === 'active') {
        /**
         * App has come to the foreground!
         */
      }
      currentState = nextState;
    };

    const stateListener = AppState.addEventListener('change', onAppStateChange);

    return () => {
      stateListener.remove();
    };
  }, []);

  const onReady = async () => {
    // await BootSplash.hide();
  };

  const onStateChange = async (state: any) => {};

  return (
    <NavigationContainer
      theme={DefaultTheme}
      onReady={onReady}
      onStateChange={onStateChange}
      ref={navigationContainerRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: colors.background.light},
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
