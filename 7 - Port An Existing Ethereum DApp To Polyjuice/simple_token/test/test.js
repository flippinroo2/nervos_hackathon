/* eslint-disable no-undef, one-var, no-unused-vars */
const ERC20EXAMPLE = artifacts.require('ERC20EXAMPLE');

require('chai').use(require('chai-as-promised')).should();

contract('ERC20EXAMPLE', (accounts) => {
  let erc20Example;
  let owner, sender, receiver, user;
  let contractAddress;

  before(async () => {
    erc20Example = await ERC20EXAMPLE.deployed('ERC20EXAMPLE', 'ERC20');
    // const erc20Example = await ERC20EXAMPLE.new('ERC20EXAMPLE', 'ERC20');
    // ERC20EXAMPLE.setAsDeployed(erc20Example);
    contractAddress = await erc20Example.address;
    [owner, sender, receiver, user] = accounts;
  });

  describe('Deployment', async () => {
    it('Contract Successfully Deployed', async () => {
      assert.notEqual(contractAddress, 0x0);
      assert.notEqual(contractAddress, '');
      assert.notEqual(contractAddress, null);
      assert.notEqual(contractAddress, undefined);
    });

    it('Mint ERC20 Tokens', async () => {
      erc20Example.mint(owner, 100000000000);
    });
  });

  describe('Testing', async () => {
    it('DEBUG', async () => {
      console.log('DEBUG');
    });
  });

  describe('DEBUG', async () => {
    it('DEBUG', async () => {
      // console.log(TestToken); // This will output the item to the console for analysis / debugging.
      // console.log(testTokenInstance); // This will output the item to the console for analysis / debugging.

      const defaults = await TestToken.defaults();
      const classDefaults = await TestToken.class_defaults;
      const json = await TestToken._json;
      // const test_json = await TestToken.toJSON(); // I believe these two are the same. (Maybe test to see if testTokenInstance allows this same function to run too?)

      const metadata = JSON.parse(json.metadata);
      const gas = defaults.gas;

      // console.log(test);
      // console.dir(test);
      // console.table(test);
      assert.equal(gas, 6721975, `Gass too high. Gas = ${gas}`);
    });
  });
});
