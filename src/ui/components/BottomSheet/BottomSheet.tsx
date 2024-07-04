import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  type BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import React, {ForwardedRef, useCallback} from 'react';
import {StyleSheet} from 'react-native';

type Props = {
  forwardRef?: ForwardedRef<BottomSheetModal>;
} & BottomSheetModalProps;

function BottomSheet({forwardRef, ...props}: Props) {
  const renderBackdrop = useCallback(
    (defaultProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...defaultProps}
        opacity={0.4}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={forwardRef}
      backdropComponent={renderBackdrop}
      // snapPoints={snapPoints}
      enableDynamicSizing
      enablePanDownToClose={true}
      // style={styles.container}
      backgroundStyle={styles.content}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 3,
    elevation: 6,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    // backgroundColor: surface,
  },
});

// export default forwardRef<BottomSheetModal, BottomSheetModalProps>(BottomSheet);
export default BottomSheet;
