{
    "name": "Demo",
    "private": true,
    "version": "0.0.0",
    "scripts": {
      "start": "react-app-rewired start",
      "build": "react-app-rewired build",
      "test": "react-app-rewired test",
      "eject": "react-scripts eject"
    },
    "dependencies": {
      "@cometchat-pro/chat": "^3.0.10",
      "@nomiclabs/hardhat-ethers": "^2.1.0",
      "@nomiclabs/hardhat-waffle": "^2.0.3",
      "ethereum-waffle": "^3.4.4",
      "ethers": "^5.6.9",
      "hardhat": "^2.10.1",
      "ipfs-http-client": "^57.0.3",
      "moment": "^2.29.4",
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "react-hooks-global-state": "^1.0.2",
      "react-icons": "^4.3.1",
      "react-identicons": "^1.2.5",
      "react-moment": "^1.1.2",
      "react-router-dom": "6",
      "react-scripts": "5.0.0",
      "react-toastify": "^9.1.1",
      "web-vitals": "^2.1.4"
    },
    "devDependencies": {
      "@openzeppelin/contracts": "^4.5.0",
      "@tailwindcss/forms": "0.4.0",
      "assert": "^2.0.0",
      "autoprefixer": "10.4.2",
      "babel-polyfill": "^6.26.0",
      "babel-preset-env": "^1.7.0",
      "babel-preset-es2015": "^6.24.1",
      "babel-preset-stage-2": "^6.24.1",
      "babel-preset-stage-3": "^6.24.1",
      "babel-register": "^6.26.0",
      "buffer": "^6.0.3",
      "chai": "^4.3.6",
      "chai-as-promised": "^7.1.1",
      "crypto-browserify": "^3.12.0",
      "dotenv": "^16.0.0",
      "https-browserify": "^1.0.0",
      "mnemonics": "^1.1.3",
      "os-browserify": "^0.3.0",
      "postcss": "8.4.5",
      "process": "^0.11.10",
      "react-app-rewired": "^2.1.11",
      "stream-browserify": "^3.0.0",
      "stream-http": "^3.2.0",
      "tailwindcss": "3.0.18",
      "url": "^0.11.0"
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  }
  


// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
    return config;
}

const webpack = require('webpack');

module.exports = function override(config) {

    config.ignoreWarnings = [/Failed to parse source map/];
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })

    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
    return config;
}









require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  networks: {
    mainnet: {
      url: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY', // Replace with your Infura key
      accounts: [PRIVATE_KEY], // Replace with the private key of the deploying account
    },
  },
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
  mocha: {
    timeout: 40000,
  },
};

  


  const hre = require('hardhat');
const fs = require('fs');

async function main() {
  const taxFee = 5;
  const Contract = await hre.ethers.getContractFactory('Genesis');
  const contract = await Contract.deploy(taxFee);

  await contract.deployed();

  const address = JSON.stringify({ address: contract.address }, null, 4);
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Deployed contract address', contract.address);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


import abi from '../abis/contract/Genesis.json'; // Update the path accordingly
import address from '../abis/contractAddress.json'; // Update the path accordingly
