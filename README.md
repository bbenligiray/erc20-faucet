# ERC20 Faucet

This is a simple contract that dispenses a fixed amount of tokens when called.
The repo does not include a frontend, it is intended to be used through Etherscan.

## Deployment steps

- Deploy your token contract, verify its code

https://ropsten.etherscan.io/address/0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924#readContract

- Deploy your faucet contract, verify its code

https://ropsten.etherscan.io/address/0x8262a9DAB3f8a0b1E6317551E214CeA89Bc3f56d#code

- Send tokens to the faucet contract

https://ropsten.etherscan.io/tx/0x209bf5db9b53aba02df7b690f446c17ba53d3ccfa99d7c7d2efe7968cf3a2df4

## Usage steps

- Go to the faucet contract page

https://ropsten.etherscan.io/address/0x8262a9DAB3f8a0b1E6317551E214CeA89Bc3f56d#writeContract

- Click "Connect to Web3" and connect your wallet

- Make sure that your wallet has ETH in it, get it from a [faucet](https://faucet.metamask.io/) if it does not

- Click "Write" under `4.withdraw` and make the transaction

https://ropsten.etherscan.io/tx/0x45b2e1f4f89e90002c31fe46dbf4a3e649de9d81a07e2054f1c01df3144db744
