import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {HomeScreenProps} from '../types.ts';
// import {useTheme} from '@react-navigation/native';
import {Panel} from '../../ui';
import {useCuisineStore} from '../../hooks';
import CuisineList from './CuisineList.tsx';
import FilterBar from './FilterBar.tsx';
import SearchBar from './SearchBar.tsx';
import {LinearGradient} from 'expo-linear-gradient';

function HomeScreen({navigation}: HomeScreenProps) {
  // const {colors} = useTheme();
  const insets = useSafeAreaInsets();

  // @ts-ignore
  const {isLoading, data, level, routes, navigate, goBack, popToTop, error} =
    useCuisineStore();

  const {cuisineLevels} = useMemo(() => {
    const levels: any = {};

    for (const item of data) {
      if (levels[item.level] === undefined) {
        levels[item.level] = [];
      }
      levels[item.level].push(item);
    }

    // let cuisinesObj = data.reduce((obj: any, item: any) => {
    //   if (levels[item.level] === undefined) {
    //     levels[item.level] = [];
    //   }
    //   levels[item.level].push(item);
    //   obj[item.id] = item;
    //   return obj;
    // }, {});

    return {cuisineLevels: levels};
  }, [data]);

  const startGradient = useMemo(
    () => (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[1, 0.2]}
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
        style={styles.startGradient}
      />
    ),
    [],
  );

  const endGradient = useMemo(
    () => (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.2, 1]}
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
        style={styles.endGradient}
      />
    ),
    [],
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Panel>
        <SearchBar
          level={level}
          routes={routes}
          popToTop={popToTop}
          goBack={goBack}
        />
        <View>
          <FilterBar />
          <CuisineList
            data={
              cuisineLevels[level] === undefined ? [] : cuisineLevels[level]
            }
            // data={cuisineLevels[level]}
            level={level}
            cuisineLevels={Object.keys(cuisineLevels).length}
            routes={routes}
            navigate={navigate}
          />
          {startGradient}
          {endGradient}
        </View>
      </Panel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startGradient: {
    position: 'absolute',
    left: 0,
    width: 20,
    top: 0,
    bottom: 0,
  },
  endGradient: {
    position: 'absolute',
    right: 0,
    width: 20,
    top: 0,
    bottom: 0,
  },
});

export default HomeScreen;
