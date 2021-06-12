//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ERC20Faucet is Ownable {
    address public erc20;
    uint256 public amount;

    constructor(address _erc20, uint256 _amount) {
        setParameters(_erc20, _amount);
    }

    function setParameters(address _erc20, uint256 _amount) public onlyOwner {
        require(_erc20 != address(0) && _amount != 0, "Invalid parameters");
        erc20 = _erc20;
        amount = _amount;
    }

    function withdraw() external {
        require(IERC20(erc20).transfer(msg.sender, amount), "Transfer failed");
    }
}
