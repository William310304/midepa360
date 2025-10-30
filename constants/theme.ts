
import { ColorSchemeName, Platform } from 'react-native';
import { DefaultTheme } from 'styled-components/native';


declare module "styled-components/native" {
  export interface DefaultTheme {
    background: string;
    text: string;
    primary: string;
    splashBackground: string;
    subText: string;
    backgroundInput: string;
    backgroundCard: string;
    [key: string]: string; // Add index signature
  }
}

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors: Record<'light' | 'dark', DefaultTheme> = {
  light: {
    background: '#fdfdfd',
    text: '#1E1E1E',
    primary: '#8C5CFF',
    splashBackground: '#F0F0F0',
    subText:'#525252',
    backgroundInput:'#f5f5f5',
    backgroundCard:'#F9F9F9'
  },
  dark: {
    background: '#1A1B1E',
    text: '#EDEDED',
    primary: '#8C5CFF',
    splashBackground: '#222222',
    subText:'#a0a0a0',
    backgroundInput:'#2a2a2a',
    backgroundCard:'#25262A'
  },
};

export function getThemeColor(colorSheme:ColorSchemeName,colorName:string){
  const theme = colorSheme ?? 'light';
  return Colors[theme][colorName];
}

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
