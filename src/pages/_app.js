import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '@styles/globals.scss';

const theme = extendTheme({
  colors: {
    primary: {
      500: "#00A298"
    },
  },
  components: {
    Heading: {
      variants: {
        display: {
          fontFamily: 'Abril Fatface'
        }
      }
    },
    Text: {
      variants: {
        display: {
          fontFamily: 'Abril Fatface'
        }
      }
    },
    FormLabel: {
      baseStyle: {
        color: 'gray.800',
        fontWeight: 'bold'
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
