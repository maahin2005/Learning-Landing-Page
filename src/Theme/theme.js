import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  //   fonts: {
  //     body: 'Space Grotesk',
  //     heading: 'Ubuntu Mono',
  //   },
  colors: {
    brand: {
      bg: '#F9F9FF',
    },
    fonts: {},
  },

  styles: {
    global: {
      body: {
        bg: 'brand.bg',
      },
    },
  },
});
