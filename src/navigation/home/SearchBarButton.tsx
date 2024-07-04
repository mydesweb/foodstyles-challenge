import React from 'react';
import {Pressable, StyleSheet, PressableProps, ViewStyle} from 'react-native';
import {Image} from 'expo-image';

const icons = {
  'arrow-left': {
    width: 14,
    height: 14,
    source: require('../../assets/icons/arrow-left.svg'),
  },
  'cross-mark': {
    width: 14,
    height: 14,
    source: require('../../assets/icons/cross-mark.svg'),
  },
};

type Props = {
  tintColor?: string;
  iconName: keyof typeof icons;
  style?: ViewStyle;
} & PressableProps;

function SearchBarButton({
  tintColor = 'rgb(67, 67, 67)',
  iconName,
  style,
  ...props
}: Props) {
  const icon = icons[iconName];

  if (!icon) {
    console.error('not found icon: ', iconName);
    return null;
  }
  return (
    <Pressable
      style={[styles.container, style]}
      hitSlop={{top: 4, right: 8, bottom: 4, left: 8}}
      {...props}>
      {({pressed}) => (
        <Image
          style={[
            styles.icon,
            {width: icon.width, height: icon.height},
            pressed && styles.iconActive,
          ]}
          tintColor={tintColor}
          source={icon.source}
          contentFit={'contain'}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  icon: {},
  iconActive: {opacity: 0.4},
});

export default SearchBarButton;
