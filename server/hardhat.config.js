require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      // url: process.env.ALCHEMY_RINKEBY_URL,
      // accounts : [`0x${process.env.ACCOUNT_PRIVATE_KEY}`],
       url:"https://eth-sepolia.g.alchemy.com/v2/yDFZLM1wrCfOzvZIn_l_mz6VDq5r7kGx",
       accounts:["0xc5ab18f0cbb32653a5696ca80eddd35978b106e750e07c5dea6cf9cac4e0c7b5"]
      
    },
    localhost: {
      url:"HTTP://127.0.0.1:7545",
      accounts:["0x7c245e3d0f581cfc038a5bbafc51220732cfd954c10187897d273a43d2a1b59a"]
    }

  }
};


