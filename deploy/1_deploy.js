module.exports = async ({ getUnnamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const accounts = await getUnnamedAccounts();

  const erc20Faucet = await deploy('ERC20Faucet', {
    args: ["0x4f3e1621bbf3318f441b3f9dfeca3b983ff955e5", "1000000000000000000000"],
    from: accounts[0],
  });
  log(`Deployed ERC20Faucet at ${erc20Faucet.address}`);
};
