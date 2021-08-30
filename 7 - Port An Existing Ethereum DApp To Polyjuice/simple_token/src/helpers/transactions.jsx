/* eslint-disable for-direction, no-plusplus, no-restricted-syntax, no-prototype-builtins, no-underscore-dangle, no-unused-vars, no-undef, no-var */

// https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native

const DEBUG = true;

async function debug(value) {
  // Check for types and then do logging and stuff based on types.
  if (DEBUG) {
    console.log(value);
  }
}

export const transactions = {
  getContracts: async (_provider) => {
    debug(`chainID: ${chainID}`);

    const ERC20EXAMPLE = contracts.chainID;
    debug(ERC20EXAMPLE);
    // return provider.eth.Contract(ABI, ADDRESS);
  },
  deployContract: async () => {
    debug('deployContract()');
  },
};

export const getActiveNetwork = async (_networks, _chainID) => {
  debug('getActiveNetwork()');
  debug('_networks');
  debug(_networks);
  debug(`_chainID: ${_chainID}`);

  if (_networks[_chainID]) {
    const activeChain = _networks[_chainID];
    debug('activeChain');
    debug(activeChain);

    return activeChain;
  }
  return null;
};

export const getContract = async (_provider, { abi, address }) => {
  debug('getContract()');
  const contract = new _provider.Contract(abi, address);
  debug('contract');
  debug(contract);
  return contract;
};

export const getContracts = async (_provider, _networks) => {
  debug('getContracts()');
  debug('_provider');
  debug(_provider);
  debug('_networks');
  debug(_networks);

  const chainID = await _provider.getChainId();
  const network = await getActiveNetwork(_networks, chainID);
  const contractMetadata = Object.values(network.localhost.contracts);
  const contracts = await Promise.all(
    contractMetadata.map(async (contractAbstraction) => {
      debug(contractAbstraction);
      return getContract(_provider, contractAbstraction);
    }),
  );
  debug(contracts);

  const [ERC20EXAMPLE, ERC721EXAMPLE, ERC1155EXAMPLE, PolitiCoin] = contracts;

  // debug(ERC20EXAMPLE);
  // debug(ERC721EXAMPLE);
  // debug(ERC1155EXAMPLE);
  // debug(PolitiCoin);

  contracts.forEach((contractObject) => {
    debug(contractObject);
  });

  return null;
};
