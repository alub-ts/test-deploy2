import { TerminalHttpProvider, Web3Versions } from '@terminal-packages/sdk';
import { Web3ReactProvider } from '@web3-react/core';
import React, { useState } from 'react';
import Web3 from 'web3';
import MainContent from './components/MainContent';
import { setSource } from './constants';

const App = () => {
  const [values, setValues] = useState({
    apiKey: 'YOUR_API_KEY',
    projectId: 'YOUR_PROJECT_KEY'
  });

  const getLibrary = provider => {
    let library;
    if (provider._metamask) {
      library = new Web3(window.terminal.ethereum);
    } else {
      library = new Web3(
        new TerminalHttpProvider({
          customHttpProvider: provider,
          apiKey: values.apiKey,
          projectId: values.projectId,
          source: setSource(provider),
          web3Version: Web3Versions.one
        })
      );
    }
    library.pollingInterval = 8000;
    return library;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MainContent setValues={setValues} values={values} />
    </Web3ReactProvider>
  );
};

export default App;
