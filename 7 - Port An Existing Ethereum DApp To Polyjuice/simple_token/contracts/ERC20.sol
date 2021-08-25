pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

// Hardhat
import 'hardhat/console.sol';

// Token
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

// Math
// import '@openzeppelin/contracts/utils/math/SafeCast.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
// import '@openzeppelin/contracts/utils/math/SignedSafeMath.sol';

// Data Structures
// import '@openzeppelin/contracts/utils/structs/BitMaps.sol';
// import '@openzeppelin/contracts/utils/structs/EnumerableMap.sol';

// Libraries
import '@openzeppelin/contracts/utils/Address.sol';
import '@openzeppelin/contracts/utils/Arrays.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

contract ERC20EXAMPLE is ERC20 {
  using Address for address;
  using Arrays for uint256[];
  using SafeMath for uint256;
  using Strings for string;

  bool DEBUG = false;

  address admin;

  uint8 public constant TOKEN_DECIMALS = 18;

  constructor(string memory name_, string memory symbol_)
    payable
    ERC20(name_, symbol_)
  {
    if (DEBUG) {
      console.log(
        'ERC20EXAMPLE - constructor(string memory name_, string memory symbol_)'
      );
    }
    // Create Total Supply here.
  }

  function mint(address account, uint256 amount) public {
    _mint(account, amount);
  }

  function transferInternal(
    address from,
    address to,
    uint256 value
  ) public {
    _transfer(from, to, value);
  }

  function approveInternal(
    address owner,
    address spender,
    uint256 value
  ) public {
    _approve(owner, spender, value);
  }
}
