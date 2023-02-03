import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar'
import FooterLargeWithNewsletter from '../components/utils/footer' 
import FooterLargeWithNewsletterAdvanced from '../components/utils/footerAdvanced'

import theme from '../components/utils/theme'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return (   
    <ChakraProvider theme={theme}>

      <WithSubnavigation />
      <Component {...pageProps} />
      <FooterLargeWithNewsletterAdvanced />
      <Analytics />


    </ChakraProvider>
    )
}

export default MyApp
