import {useColorMode} from "#imports";

export function useTheme () {
  const colorMode = useColorMode();

  switch (colorMode.preference) {
    case 'system':
      return window?.matchMedia('[preferred-color-scheme: dark]') ? 'dark' : 'light';
    default:
      return colorMode.preference;
  }
}
