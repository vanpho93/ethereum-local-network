const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const WEB3_LOCAL_API = 'http://localhost:8545';

const { ROOT_PRIVATE_KEY } = process.env;

const provider = new HDWalletProvider(ROOT_PRIVATE_KEY, WEB3_LOCAL_API);
const web3 = new Web3(provider);

module.exports = { web3, WEB3_LOCAL_API };
