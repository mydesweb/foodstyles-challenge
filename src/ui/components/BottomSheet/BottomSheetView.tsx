import React, {type PropsWithChildren, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomSheetView as BSView} from '@gorhom/bottom-sheet';

type Props = PropsWithChildren<{
  // title: string;
}>;

export default function BottomSheetView({children, ...props}: Props) {
  const insets = useSafeAreaInsets();

  const style = useMemo(
    () => {
      return [{paddingBottom: Math.max(insets.bottom, 16)}];
    },
    // () => [{paddingBottom: 0}],
    [insets.bottom],
  );

  return (
    <BSView style={style} {...props}>
      {children}
    </BSView>
  );
}

const styles = StyleSheet.create({});
