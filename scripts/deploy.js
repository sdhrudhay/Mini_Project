const hre = require("hardhat");

async function main() {
  const ProjectHandler = await hre.ethers.getContractFactory("ProjectHandler");
  const projectHandler = await ProjectHandler.deploy("hello");

  await projectHandler.deployed();

  console.log("Project deployed to:", projectHandler.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
