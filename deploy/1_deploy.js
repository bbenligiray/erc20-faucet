module.exports = async ({ getUnnamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const accounts = await getUnnamedAccounts();

  const erc20Faucet = await deploy('ERC20Faucet', {
    args: ["0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924", "1000000000000000000000"],
    from: accounts[0],
  });
  log(`Deployed ERC20Faucet at ${erc20Faucet.address}`);
};
