import React, {useMemo, useRef} from 'react';
import {StyleSheet, View, useColorScheme} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {
  setThemePreference,
  ThemePreference,
  useThemePreference,
} from '@vonovak/react-native-theme-control';
import {BottomSheet, BottomSheetView, BottomSheetModal} from './BottomSheet';

function ThemeControl() {
  const modalRef = useRef<BottomSheetModal>(null);

  const values: Array<ThemePreference> = useMemo(
    () => ['light', 'dark', 'system'],
    [],
  );

  const themePreference = useThemePreference();

  const colorScheme = useColorScheme();

  return (
    <BottomSheet forwardRef={modalRef}>
      <BottomSheetView>
        <View style={styles.container}>
          <SegmentedControl
            appearance={colorScheme ?? 'light'}
            // fontStyle={cache.fontStyle}
            // activeFontStyle={cache.activeFontStyle}
            values={values}
            selectedIndex={values.indexOf(themePreference)}
            onChange={({nativeEvent}) => {
              setThemePreference(nativeEvent.value as ThemePreference);
            }}
            // tabStyle={{backgroundColor: 'transparent'}}
            // tintColor={colors.surface}
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    paddingVertical: 24,
    alignSelf: 'center',
  },
});

export default ThemeControl;
