// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.utils.parseEther("0.001");

//   const Lock = await hre.ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   await lock.deployed();

//   console.log(
//     `Lock with ${ethers.utils.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


// const main = async() => {
//   const Lock = await hre.ethers.getContractFactory("realEstate");
//   const lock = await Lock.deploy();
//   await lock.deployed();

//   console.log("Contract deployed to : ", contract.address);

// }

// const runMain = async() => {
//   try {
//     await main();
//     process.exit(0);
//   } catch(error) {
//     console.log(error);
//     process.exit(1);
//   }
// }

// runMain();

const main = async () => {
  try {
    const waveContract = await ethers.getContractFactory("realEstate");
    const wavePortal = await waveContract.deploy("abc","bfs","uh",2,4);
    console.log("WavePortal deployed to: ", wavePortal.address);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();