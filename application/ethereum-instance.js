const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const { ROOT_PRIVATE_KEY, WEB3_API } = process.env;

const provider = new HDWalletProvider(ROOT_PRIVATE_KEY, WEB3_API);
const web3 = new Web3(provider);

module.exports = { web3, WEB3_API };
