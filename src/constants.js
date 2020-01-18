import { SourceType } from '@terminal-packages/sdk';
import {
  fortmatic,
  injected,
  network,
  portis,
  torus,
  walletconnect
} from './connectors';

export const connectorTypes = {
  Injected: injected,
  Portis: portis,
  Fortmatic: fortmatic,
  Network: network,
  Torus: torus,
  WalletConnect: walletconnect
};

export const connectorNames = {
  Injected: 'metamask',
  Portis: 'portis',
  Fortmatic: 'fortmatic',
  Network: 'infura',
  Torus: 'torus',
  WalletConnect: 'walletconnect'
};

export const setSource = provider => {
  if (provider.isTorus) return SourceType.Torus;
  if (provider.isPortis) return SourceType.Portis;
  if (provider.isWalletConnect) return 'WalletConnect';
  if (provider.isFortmatic) return SourceType.Fortmatic;

  return SourceType.Web3ProviderEngine;
};

export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/terminaldotco',
  GITHUB: 'https://github.com/Terminal-Systems',
  MEDIUM: 'https://medium.com/terminaldotco',
  TERMINAL: 'https://terminal.co/'
};
