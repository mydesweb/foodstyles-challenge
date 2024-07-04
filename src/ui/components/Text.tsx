import {type ReactElement} from 'react';
import {StyleSheet, Text as RNText, type TextProps} from 'react-native';

export type Props = {
  // as?: 'Headline' | 'Title' | 'Body' | 'Label';
  // size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  // size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
  // weight?:
  //   | 'ultralight'
  //   | 'thin'
  //   | 'light'
  //   | 'regular'
  //   | 'medium'
  //   | 'mediumItalic'
  //   | 'semibold'
  //   | 'bold'
  //   | 'extrabold'
  //   | 'heavy';
  // color?: ColorValue;
  // style?: TextStyle | [TextStyle];
  // styleName: keyof Object.keys().;
  fast?: boolean;
} & TextProps;

function Text({
  // as = 'body',
  // size = 'lg',
  // weight = 'regular',
  // color = '#0f172a',
  // style,

  // styleName,
  ...props
}: Props): ReactElement {
  return <RNText maxFontSizeMultiplier={1.1} {...props} />;
}

const styles = StyleSheet.create({});

export default Text;
