"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { 
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from '@zerodevapp/wagmi/rainbowkit';
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";
const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, polygonMumbai],
  [publicProvider()]
);
const defaultProjectId = 'd560fe18-5d63-49f8-8c1c-9d37c180e726'
const connectors = connectorsForWallets([
  {
    groupName: 'Social',
    wallets: [
      googleWallet({options: { projectId: defaultProjectId }}),
      facebookWallet({options: { projectId: defaultProjectId }}),
      githubWallet({options: { projectId: defaultProjectId }}),
      discordWallet({options: { projectId: defaultProjectId }}),
      twitchWallet({options: { projectId: defaultProjectId }}),
      twitterWallet({options: { projectId: defaultProjectId }})
    ],
  },
]);


const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});
const MyApp = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize={"compact"}>
      <ConnectButton/>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};


export default MyApp;
