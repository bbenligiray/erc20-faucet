module.exports = async ({ getUnnamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const accounts = await getUnnamedAccounts();

  const erc20Faucet = await deploy('ERC20Faucet', {
    args: ["0xc8fed58d49c9fd3d2690e0eb29cde9678cc45a9a", "1000000000000000000000"],
    from: accounts[0],
  });
  log(`Deployed ERC20Faucet at ${erc20Faucet.address}`);
};
