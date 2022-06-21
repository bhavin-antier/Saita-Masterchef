const hre = require("hardhat");

async function main() {
  //   await hre.run("verify:verify", {
  //     address: "0x6410285e47A98D5885169CB1f120BA976724C370",
  //     constructorArguments:[],
  //     contract: "contracts/Saitama.sol:SAITAMA",
  //   });

  await hre.run("verify:verify", {
    address: "0x85EB04E60ee5920eaFfe2807CcC1521358F6Cf5D",
    constructorArguments: [
      "0x6410285e47A98D5885169CB1f120BA976724C370",
      "0xF0360dA6bE15f586D2d673d11323929bf4205D3f",
      "10889229",
      "30000000000",
    ],
    contract: "contracts/Masterchef.sol:MasterChef",
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
