import React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {Image} from 'expo-image';
import {Text, typography} from '../../ui';

type Props = {
  width: number;
  name: string;
  imagePath: string;
} & PressableProps;

function Cuisine({imagePath, name, width, ...props}: Props) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        {width},
        pressed && styles.active,
      ]}
      {...props}>
      <Image
        style={styles.icon}
        source={imagePath}
        contentFit={'cover'}
        transition={350}
      />
      <Text style={styles.label}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  active: {
    opacity: 0.5,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  label: {
    ...typography.label,
    flex: 1,
    marginLeft: 8,
  },
});

export default Cuisine;
