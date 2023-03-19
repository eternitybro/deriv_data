import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import { chains, client } from '../wagmi'
import CONFIG from '../config.json'
import { ChakraProvider } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

function App({ Component, pageProps }: AppProps) {

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <NextHead>
            <title>DERIV_DATA</title>
          </NextHead>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
          />
          {mounted && <Component {...pageProps} />}
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}

export default App
