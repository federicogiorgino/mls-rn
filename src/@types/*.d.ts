import "@react-navigation/native";

// Override the theme in react native navigation to accept our custom theme props.
declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      text: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
