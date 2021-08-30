const HDWalletProvider = require('@truffle/hdwallet-provider');
// const MetamaskProvider = require('@metamask/detect-provider');
const Web3 = require('web3');
const protocol = 'http';
const ip = 'localhost';
const port = 9650;

// const walletProvider = new HDWalletProvider(
//   '48ddfe82a2f1b215fcd2daf8982c1f692b49f5f2e843461260f6f55643ffb97f',
//   'http://localhost:8545',
// );
// const metamaskProvider = await MetamaskProvider(); // This doesn't work because window is not defined.

module.exports = {
  debug: true,
  stacktrace: true,
  stacktraceExtra: true,
  networks: {
    // MNEMONIC - hurdle fault mercy shallow rule update audit whisper acoustic horror light nephew
    localhost: {
      provider: function () {
        return new Web3.providers.HttpProvider(`http://127.0.0.1:7545`, {
          keepAlive: true,
        });
      },
      network_id: '*', // Match any network id
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
    infuraRinkeby: {
      provider: function () {
        return new HDWalletProvider(
          '48ddfe82a2f1b215fcd2daf8982c1f692b49f5f2e843461260f6f55643ffb97f',
          'https://rinkeby.infura.io/v3/f739d97cff054117b090e87428a7ff76',
        );
      },
      network_id: 4,
      from: '0xeB5c8FB7d97bF7084ABdD77CCaF7dB5BeAAB08fA',
    },
    moralisRinkeby: {
      provider: function () {
        return new HDWalletProvider(
          '48ddfe82a2f1b215fcd2daf8982c1f692b49f5f2e843461260f6f55643ffb97f',
          'https://speedy-nodes-nyc.moralis.io/e08d45b474626886e6993c5a/eth/rinkeby',
        );
      },
      network_id: 4,
      from: '0xeB5c8FB7d97bF7084ABdD77CCaF7dB5BeAAB08fA',
    },
    avalanche: {
      provider: function () {
        return new Web3.providers.HttpProvider(
          `${protocol}://${ip}:${port}/ext/bc/C/rpc`,
        );
      },
      network_id: '*',
      gas: 3000000,
      gasPrice: 225000000000,
      // "startnode node1 --db-type=memdb --staking-enabled=true --http-port=9650 --staking-port=9651 --log-level=debug --bootstrap-ips= --staking-tls-cert-file=certs/keys1/staker.crt --staking-tls-key-file=certs/keys1/staker.key",
      // "startnode node2 --db-type=memdb --staking-enabled=true --http-port=9652 --staking-port=9653 --log-level=debug --bootstrap-ips=127.0.0.1:9651 --bootstrap-ids=NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg --staking-tls-cert-file=certs/keys2/staker.crt --staking-tls-key-file=certs/keys2/staker.key",}
    },
  },
  build_directory: './artifacts',
  contracts_directory: './contracts',
  contracts_build_directory: './artifacts',
  migration_directory: './migrations',
  compilers: {
    solc: {
      version: '^0.8.0',
      evmVersion: 'petersburg',
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  mocha: {
    enableTimeouts: false,
    before_timeout: 300000,
  },
};
