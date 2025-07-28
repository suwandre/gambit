'use client';

import { createConfig, http, WagmiProvider } from 'wagmi';
import { Chain, createClient } from 'viem';
import React from 'react';
import { injected, metaMask } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
  connectors: [injected(), metaMask()],
  transports: {
    [abstractMainnet.id]: http(abstractMainnet.rpcUrls.default.http[0]),
  }
});

export const CustomWagmiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
