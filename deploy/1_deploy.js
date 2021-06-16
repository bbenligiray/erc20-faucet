module.exports = async ({ getUnnamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const accounts = await getUnnamedAccounts();

  const erc20Faucet = await deploy('ERC20Faucet', {
    args: ["0x2d6d050fc44d4db1c8577f4cf87905811fa126b2", "1000000000000000000000"],
    from: accounts[0],
  });
  log(`Deployed ERC20Faucet at ${erc20Faucet.address}`);
};
