/* eslint-disable no-undef */
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
