import React, {memo, useMemo, useRef} from 'react';
import {
  type NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  type TextInputChangeEventData,
  type TextInputProps,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {typography} from '../../ui';
import {Image} from 'expo-image';
import SearchBarButton from './SearchBarButton.tsx';

type Props = {
  level: number;
  routes: any[];
  popToTop: () => void;
  goBack: () => void;
  onChangeText?: (text: string) => {};
} & TextInputProps;

function SearchBar({
  level,
  routes,
  onChangeText,
  popToTop,
  goBack,
  style,
  ...props
}: Props) {
  const textInputRef = useRef<TextInput>(null);

  const {name, imagePath} = routes[level - 1];

  console.log(routes[level - 1]);

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const {text} = e.nativeEvent;
  };

  const startIcon = useMemo(() => {
    return (
      <Image
        style={styles.startIcon}
        source={imagePath}
        contentFit={'contain'}
      />
    );
  }, [imagePath]);

  const endActions = useMemo(() => {
    return (
      <View style={styles.endActions}>
        <SearchBarButton iconName={'arrow-left'} onPress={goBack} />
        <View style={styles.separator} />
        <SearchBarButton iconName={'cross-mark'} onPress={popToTop} />
      </View>
    );
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            routes.length === 1 ? 'rgb(237, 237, 237)' : 'rgb(255, 236, 201)',
        },
        style,
      ]}
      onLayout={e => {
        const {
          nativeEvent: {layout},
        } = e;
        // useSearchStore.setState({layout});
      }}>
      {startIcon}
      <TextInput
        style={[styles.textInput]}
        onChange={onChange}
        onChangeText={onChangeText}
        // hitSlop={{top: 4, bottom: 4, left: 0, right: 0}}
        placeholder={''}
        maxFontSizeMultiplier={1.1}
        placeholderTextColor={'rgb(67, 67, 67)'}
        autoCapitalize={'none'}
        autoCorrect={false}
        autoComplete={'off'}
        value={name}
        onFocus={e => {}}
        onBlur={e => {
          // useSearchStore.setState({focused: false});
        }}
        {...props}
        ref={textInputRef}
      />
      {routes.length > 1 && endActions}
    </View>
  );
}

const styles = StyleSheet.create({
  startIcon: {
    width: 33,
    height: 33,
  },
  endActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    width: 1,
    height: 19,
    backgroundColor: 'rgb(241 211 155)',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 17,
    marginBottom: 11,
    borderRadius: 100,
  },
  textInput: {
    ...typography.bodyBold,
    // ...textStyles.body.largeBold,
    flex: 1,
    // minHeight: 36,
    backgroundColor: 'transparent',
    // borderRadius: 14,
    paddingLeft: 7,
    paddingRight: 7,
    // paddingLeft: 36,
    textAlignVertical: 'center',
    // paddingTop: 7,
    // paddingBottom: 7,

    // lineHeight: 36,
    borderColor: 'transparent',
    // borderWidth: StyleSheet.hairlineWidth,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    //
    // elevation: 2,
  },
});

export default memo(SearchBar);
