import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? [styles.default, { fontFamily: 'PTSans_400Regular' }] : undefined,
        type === 'title' ? [styles.title, { fontFamily: 'PTSans_700Bold' }] : undefined,
        type === 'defaultSemiBold' ? [styles.defaultSemiBold, { fontFamily: 'PTSans_700Bold' }] : undefined,
        type === 'subtitle' ? [styles.subtitle, { fontFamily: 'PTSans_700Bold' }] : undefined,
        type === 'link' ? [styles.link, { fontFamily: 'PTSans_400Regular' }] : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
