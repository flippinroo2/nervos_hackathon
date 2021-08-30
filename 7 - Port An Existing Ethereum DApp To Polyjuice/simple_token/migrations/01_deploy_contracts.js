/* eslint-disable no-undef */
// Infura Rinkeby Contract Address: 0xb35380333D44fcF5aA57CadE92f8a06a939E0763 (https://rinkeby.etherscan.io/address/0xb35380333d44fcf5aa57cade92f8a06a939e0763)
// Moralis Rinkeby Contract Address: 0xaa02f9c420A0299e9BC25611F915a0965d8730dD (https://rinkeby.etherscan.io/address/0xaa02f9c420A0299e9BC25611F915a0965d8730dD)
const DEBUG = false;

const { cache, resolver, require } = artifacts;
const Token = artifacts.require('Token');

module.exports = async function (deployer) {
  if (DEBUG) {
    const { chain, networks, provider } = deployer;
    const { migration_directory } = config;
    const { agent, connected, headers, host, httpAgent, send } = provider;
    const { eth, networkType, providers, utils } = web3;
    debugger;
  }

  await deployer.deploy(Token, 'Token', 'TOKEN', 18, 1000);
  const token = await Token.deployed();
};
