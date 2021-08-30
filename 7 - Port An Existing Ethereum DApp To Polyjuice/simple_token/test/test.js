/* eslint-disable no-undef, one-var, no-unused-vars */
const DEBUG = true;

// const chai = require('chai');
const { assert, config, expect, should, use, util } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {
  createFixtureLoader,
  defaultAccounts,
  deployContract,
  deployMockContract,
  link,
  loadFixture,
  MockProvider,
  solidity,
} = require('ethereum-waffle');

const Token = artifacts.require('Token');

var token;
var owner, sender, receiver, user;
var contractAddress;

// chai.use(chaiAsPromised).should();
use(solidity);

async function getBalances() {
  const tokenBalance = await token.balanceOf(token.address);
  const ownerBalance = await token.balanceOf(owner);
  const senderBalance = await token.balanceOf(sender);
  const receiverBalance = await token.balanceOf(receiver);
  const userBalance = await token.balanceOf(user);
  return {
    token: tokenBalance.toNumber(),
    owner: ownerBalance.toNumber(),
    sender: senderBalance.toNumber(),
    receiver: receiverBalance.toNumber(),
    user: userBalance.toNumber(),
  };
}

async function getAllowances(address) {
  const tokenAllowance = await token.allowance(address, token.address);
  const ownerAllowance = await token.allowance(address, owner);
  const senderAllowance = await token.allowance(address, sender);
  const receiverAllowance = await token.allowance(address, receiver);
  const userAllowance = await token.allowance(address, user);
  return {
    token: tokenAllowance.words[0],
    owner: ownerAllowance.words[0],
    sender: senderAllowance.words[0],
    receiver: receiverAllowance.words[0],
    user: userAllowance.words[0],
  };
}

contract('Token', (accounts) => {
  before(async () => {
    token = await Token.deployed();
    // token = await Token.deployed('Token', 'TOKEN');
    // const token = await Token.new('Token', 'TOKEN');
    // Token.setAsDeployed(token);
    contractAddress = await token.address;
    [owner, sender, receiver, user] = accounts;
  });

  describe('Deployment', async () => {
    it('Contract Successfully Deployed', async () => {
      assert.notEqual(contractAddress, 0x0);
      assert.notEqual(contractAddress, '');
      assert.notEqual(contractAddress, null);
      assert.notEqual(contractAddress, undefined);
    });
  });

  describe('Transactions', async () => {
    it('Mint Tokens', async () => {
      await expect(token.mint(owner, 100000000000)).to.be.reverted;
      // await expect(token.mint(owner, 100000000000)).to.be.revertedWith(
      //   'Must be less than total supply.',
      // );
    });

    it('Precheck Allowances', async () => {
      const tokenAllowances = await getAllowances(token.address);
      const ownerAllowances = await getAllowances(owner);
      const senderAllowances = await getAllowances(sender);
      const receiverAllowances = await getAllowances(receiver);
      const userAllowances = await getAllowances(user);
      expect(tokenAllowances.token).to.be.equal(0);
      expect(tokenAllowances.owner).to.be.equal(0);
      expect(tokenAllowances.sender).to.be.equal(0);
      expect(senderAllowances.owner).to.be.equal(0);
      expect(senderAllowances.sender).to.be.equal(0);
      expect(senderAllowances.user).to.be.equal(0);
      expect(userAllowances.token).to.be.equal(0);
    });

    it('Approve Tokens', async () => {
      await token.approve(sender, 1000);
      await token.approveFrom(sender, receiver, 10);
      // TODO: Add some assertions here??? (Think of what to add. Maybe check )
    });

    it('Postcheck Allowances', async () => {
      const tokenAllowances = await getAllowances(token.address);
      const ownerAllowances = await getAllowances(owner);
      const senderAllowances = await getAllowances(sender);
      const receiverAllowances = await getAllowances(receiver);
      const userAllowances = await getAllowances(user);
      expect(tokenAllowances.token).to.be.equal(0); // Should re-do the contract code so this is the total supply.
      expect(tokenAllowances.owner).to.be.equal(0);
      expect(tokenAllowances.sender).to.be.equal(1000);
      expect(ownerAllowances.user).to.be.equal(0);
      expect(senderAllowances.owner).to.be.equal(0);
      expect(senderAllowances.sender).to.be.equal(0); // Should re-do the contract code so this is equal to the balance.
      expect(senderAllowances.receiver).to.be.equal(10);
      expect(userAllowances.token).to.be.equal(0);
    });

    it('Precheck Balances', async () => {
      const balances = await getBalances();
      expect(balances.token).to.be.equal(1000);
      expect(balances.owner).to.be.equal(0);
      expect(balances.sender).to.be.equal(0);
      expect(balances.receiver).to.be.equal(0);
      expect(balances.user).to.be.equal(0);
    });

    it('Transfer Tokens', async () => {
      const tokenAllowances = await getAllowances(token.address);
      const senderAllowances = await getAllowances(sender);
      const ownerAllowances = await getAllowances(receiver);
      const test = await token.transfer(sender, 100);
      // const test2 = await token.transferFrom(sender, receiver, 10, {
      //   from,
      //   to,
      //   gas,
      //   gasPrice,
      //   value,
      //   data,
      //   nonce,
      // }); // When you pass an object as the last parameter then truffle will automatically parse it to do the transaction with those supplied values.
      // const test4 = await token.sendTransaction(); // This accepts the same values as the web3.eth.sendTransaction() function. Will let you send a manual transaction.
      const test5 = await token.transferFrom(sender, receiver, 10, {
        from: receiver,
      }); // When you pass an object as the last parameter then truffle will automatically parse it to do the transaction with those supplied values.
    });

    it('Postcheck Balances', async () => {
      const balances = await getBalances();
      expect(balances.token).to.be.equal(900);
      expect(balances.owner).to.be.equal(0);
      expect(balances.sender).to.be.equal(90);
      expect(balances.receiver).to.be.equal(10);
      expect(balances.user).to.be.equal(0);
    });
  });
  describe('DEBUG', async () => {
    it('DEBUG', async () => {
      // console.log(Token); // This will output the item to the console for analysis / debugging.
      // console.log(token); // This will output the item to the console for analysis / debugging.

      const defaults = await Token.defaults();
      // const classDefaults = await Token.class_defaults;
      const json = await Token._json;
      // const test_json = await Token.toJSON(); // I believe these two are the same. (Maybe test to see if testTokenInstance allows this same function to run too?)

      const metadata = JSON.parse(json.metadata);
      const gas = defaults.gas;

      // console.log(test);
      // console.dir(test);
      // console.table(test);

      // debugger;

      assert.equal(gas, 6721975, `Gass too high. Gas = ${gas}`);
    });
  });
});
