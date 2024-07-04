import React, {type PropsWithChildren} from 'react';
import {StyleSheet, View, type ViewStyle} from 'react-native';

type Props = PropsWithChildren<{
  style?: ViewStyle;
}>;

function Panel({style, children, ...props}: Props) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 16,
    paddingBottom: 6,
    marginHorizontal: 18,
    backgroundColor: 'white',
    borderRadius: 9,
    shadowColor: 'rgba(176,176,176)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 6,
  },
});

export default Panel;
