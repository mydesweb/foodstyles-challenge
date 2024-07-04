/**
 * https://reactnavigation.org/docs/typescript/
 * https://medium.com/@vadymchernykh/react-native-navigation-with-typescript-3c4e6bfaf583
 */

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  // Home: NavigatorScreenParams<HomeTabParamList>;
  // PostDetails: {id: string};
  // NotFound: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
