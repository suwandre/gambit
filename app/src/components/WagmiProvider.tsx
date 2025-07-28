'use client';

import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { Chain, createClient } from 'viem';
import React from 'react';

export const abstractMainnet: Chain = {
  id: 2741,
  name: 'Abstract Mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.mainnet.abs.xyz'] },
  },
  blockExplorers: {
    default: { name: 'ABScan', url: 'https://abscan.org/' },
  },
};

// Wagmi config
const config = createConfig({
  chains: [abstractMainnet],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const CustomWagmiProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      {children}
    </WagmiProvider>
  );
}