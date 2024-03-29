require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');  // @notice - Should use new module.
// const mnemonic = process.env.MNEMONIC;
const mnemonic = "e3a071610d9e44a62f583397309b196c90f75376181cd831fd1bb8031d35e204";

module.exports = {
  networks: {
    polygon_testnet: {  /// Mumbai testnet of Matic
      provider: () => new HDWalletProvider(mnemonic, "https://rpc-mumbai.maticvigil.com"),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      disableConfirmationListener: true,
      pollingInterval: 1800000
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/" + process.env.INFURA_KEY),
      network_id: 5,
      gas: 7500000,
      gasPrice: 5000000000, // 5 gwei,
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets)
      //from: process.env.DEPLOYER_ADDRESS
    },
    // main ethereum network(mainnet)
    live: {
      provider: () => new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/" + process.env.INFURA_KEY),
      network_id: 1,
      gas: 5500000,
      gasPrice: 2000000000 // 2 gwei
    },
    local: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      skipDryRun: true,
      gasPrice: 5000000000
    }
  },
  compilers: {
    solc: {
      version: "0.6.12",
      // version: "pragma",
      //version: "0.5.16",  /// Final version of solidity-v0.5.x
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
