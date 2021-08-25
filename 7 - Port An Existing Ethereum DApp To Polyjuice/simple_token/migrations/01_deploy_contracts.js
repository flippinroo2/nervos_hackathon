/* eslint-disable no-undef */
const DEBUG = false;

const { cache, resolver, require } = artifacts;
const ERC20EXAMPLE = artifacts.require('ERC20EXAMPLE');
const ERC721EXAMPLE = artifacts.require('ERC721EXAMPLE');
const TestToken = artifacts.require('TestToken');

module.exports = async function (deployer) {
  if (DEBUG) {
    const { chain, networks, provider } = deployer;
    const { migration_directory } = config;
    const { agent, connected, headers, host, httpAgent, send } = provider;
    const { eth, networkType, providers, utils } = web3;
    debugger;
  }

  await deployer.deploy(ERC20EXAMPLE, 'ERC20EXAMPLE', 'ERC20');

  if (DEBUG) {
    debugger;
  }
};
