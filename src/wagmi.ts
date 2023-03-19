import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { infuraProvider } from '@wagmi/core/providers/infura'

import { defaultNetwork } from './abis/Contracts'
import CONFIG from './config.json'

const { chains, provider, webSocketProvider } = configureChains(
  [...(defaultNetwork === goerli ? [goerli] : [mainnet])],
  [
    infuraProvider({ apiKey: CONFIG.INFURA_ID }),
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: CONFIG.APP_NAME,
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
