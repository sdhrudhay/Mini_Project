require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "sepolia",
  paths:{
    artifacts: './src/artifacts'
  },
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/82fe4419b7864a1eaa85fb2775e2a62f",
      accounts: [process.env.PRIVATE_KEY1],
      chainId: 11155111,
    }
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}