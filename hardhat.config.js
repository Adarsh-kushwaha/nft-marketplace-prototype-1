require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks:{
    hardhat:{
      chainId:1337,
    },
    mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/SBUiPIeE2KpRnPAnSRYbMuxfOgiL-kh6",
      accounts:["e3af85dda09d1f32acbb9f466d332e54f96e6136622b7a9122b438089edc5979"]
    }
  },
  solidity: "0.8.4",
};
