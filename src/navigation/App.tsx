import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Navigation} from './navigation.tsx';
import {BottomSheetModalProvider} from '../ui';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

type Props = PropsWithChildren<{
  isHeadless: boolean;
}>;

/**
 * third-party Library issues - temporary ignore them
 */

LogBox.ignoreLogs([
  '[Reanimated] Tried to modify key `reduceMotion` of an object which has been already passed to a worklet.',
]);

function App({isHeadless}: Props) {
  if (isHeadless) {
    // App has been launched in the background by iOS
    // TODO to be implemented
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <BottomSheetModalProvider>
          <Navigation />
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
