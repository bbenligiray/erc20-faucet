module.exports = async ({ getUnnamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const accounts = await getUnnamedAccounts();

  const erc20Faucet = await deploy('ERC20Faucet', {
    args: ["0xef6115b6e8461e70d26869641a228d004c67a782", "1000000000000000000000"],
    from: accounts[0],
  });
  log(`Deployed ERC20Faucet at ${erc20Faucet.address}`);
};
