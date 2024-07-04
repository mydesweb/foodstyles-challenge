import React, {useMemo} from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import Text from './Text';
import {typography} from '../styles';
// import {Icon} from '../Icon';
// import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  label: string;
} & PressableProps;

function Chip({label, ...props}: Props) {
  // const type = typeProp;
  // console.log('chip render', Date.now());

  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        styles.container,
        pressed && styles.containerActive,
      ]}>
      {({pressed}) => (
        <>
          <Text style={[styles.label, pressed && styles.labelActive]}>
            {label}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(236,236,236)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 6,
    paddingBottom: 6,
  },
  containerActive: {},
  label: {
    ...typography.smallLabel,
    textAlign: 'center',
  },
  labelActive: {
    color: 'rgb(67, 67, 67)',
  },
});

export default Chip;
