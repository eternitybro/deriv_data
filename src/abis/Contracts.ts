import { sepolia, mainnet } from '@wagmi/core/chains'

export const defaultNetwork = sepolia
export const contractAddresses: {
  [chainId: number]: `0x${string}`
} = {
  [sepolia.id]: '0x6F96282D897a7E1D5bDA93E8C699b5eC3bEF3d21'
}
// uncomment only methods you need
export const abi = [
  {
    inputs: [
      { 
        internalType: "uint256", 
        name: "tokenId", 
        type: "uint256" },
      { 
        internalType: "string", 
        name: "newData", 
        type: "string" 
      }
    ],
    name: "setTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "COST_AFTER_FREE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_FREE_PER_WALLET",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_PER_TX",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_PER_WALLET",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "qty",
        type: "uint256"
      }
    ],
    name: "adopt",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "adoptionEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]"
      },
      {
        internalType: "uint256",
        name: "qty",
        type: "uint256"
      }
    ],
    name: "allowListAdopt",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "allowListAdoptionEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allowListRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "to",
  //       type: "address"
  //     },
  //     {
  //       internalType: "uint256",
  //       name: "tokenId",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "approve",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "owner",
  //       type: "address"
  //     }
  //   ],
  //   name: "balanceOf",
  //   outputs: [
  //     {
  //       internalType: "uint256",
  //       name: "",
  //       type: "uint256"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256",
  //       name: "tokenId",
  //       type: "uint256"
//     }
  //   ],
  //   name: "explicitOwnershipOf",
  //   outputs: [
  //     {
  //       "components": [
  //         {
  //           internalType: "address",
  //           name: "addr",
  //           type: "address"
  //         },
  //         {
  //           internalType: "uint64",
  //           name: "startTimestamp",
  //           type: "uint64"
  //         },
  //         {
  //           internalType: "bool",
  //           name: "burned",
  //           type: "bool"
  //         },
  //         {
  //           internalType: "uint24",
  //           name: "extraData",
  //           type: "uint24"
  //         }
  //       ],
  //       internalType: "struct IERC721A.TokenOwnership",
  //       name: "",
  //       type: "tuple"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256[]",
  //       name: "tokenIds",
  //       type: "uint256[]"
  //     }
  //   ],
  //   name: "explicitOwnershipsOf",
  //   outputs: [
  //     {
  //       "components": [
  //         {
  //           internalType: "address",
  //           name: "addr",
  //           type: "address"
  //         },
  //         {
  //           internalType: "uint64",
  //           name: "startTimestamp",
  //           type: "uint64"
  //         },
  //         {
  //           internalType: "bool",
  //           name: "burned",
  //           type: "bool"
  //         },
  //         {
  //           internalType: "uint24",
  //           name: "extraData",
  //           type: "uint24"
  //         }
  //       ],
  //       internalType: "struct IERC721A.TokenOwnership[]",
  //       name: "",
  //       type: "tuple[]"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256",
  //       name: "tokenId",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "getApproved",
  //   outputs: [
  //     {
  //       internalType: "address",
  //       name: "",
  //       type: "address"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256",
  //       name: "qty",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "getPrice",
  //   outputs: [
  //     {
  //       internalType: "uint256",
  //       name: "",
  //       type: "uint256"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "owner",
  //       type: "address"
  //     },
  //     {
  //       internalType: "address",
  //       name: "operator",
  //       type: "address"
  //     }
  //   ],
  //   name: "isApprovedForAll",
  //   outputs: [
  //     {
  //       internalType: "bool",
  //       name: "",
  //       type: "bool"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [],
  //   name: name,
  //   outputs: [
  //     {
  //       internalType: "string",
  //       name: "",
  //       type: "string"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "numberMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  // {
  //   inputs: [],
  //   name: "owner",
  //   outputs: [
  //     {
  //       internalType: "address",
  //       name: "",
  //       type: "address"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256",
  //       name: "tokenId",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "ownerOf",
  //   outputs: [
  //     {
  //       internalType: "address",
  //       name: "",
  //       type: "address"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [],
  //   name: "renounceOwnership",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
 
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256",
  //       name: "_tokenId",
  //       type: "uint256"
  //     },
  //     {
  //       internalType: "uint256",
  //       name: "_salePrice",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "royaltyInfo",
  //   outputs: [
  //     {
  //       internalType: "address",
  //       name: "",
  //       type: "address"
  //     },
  //     {
  //       internalType: "uint256",
  //       name: "",
  //       type: "uint256"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "from",
  //       type: "address"
  //     },
  //     {
  //       internalType: "address",
  //       name: "to",
  //       type: "address"
  //     },
  //     {
  //       internalType: "uint256",
  //       name: "tokenId",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "safeTransferFrom",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "from",
  //       type: "address"
  //     },
  //     {
  //       internalType: "address",
  //       name: "to",
  //       type: "address"
  //     },
  //     {
  //       internalType: "uint256",
  //       name: "tokenId",
  //       type: "uint256"
  //     },
  //     {
  //       internalType: "bytes",
  //       name: "_data",
  //       type: "bytes"
  //     }
  //   ],
  //   name: "safeTransferFrom",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "bytes32",
  //       name: "allowListRoot_",
  //       type: "bytes32"
  //     }
  //   ],
  //   name: "setAllowListRoot",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "operator",
  //       type: "address"
  //     },
  //     {
  //       internalType: "bool",
  //       name: "approved",
  //       type: "bool"
  //     }
  //   ],
  //   name: "setApprovalForAll",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "string",
  //       name: "baseURI_",
  //       type: "string"
  //     }
  //   ],
  //   name: "setBaseURI",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "receiver",
  //       type: "address"
  //     },
  //     {
  //       internalType: "uint96",
  //       name: "feeNumerator",
  //       type: "uint96"
  //     }
  //   ],
  //   name: "setDefaultRoyalty",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
 
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256",
  //       name: "MAX_PER_TX_",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "setMaxPerTx",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256",
  //       name: "MAX_PER_WALLET_",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "setMaxPerWallet",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256",
  //       name: "maxSupply_",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "setMaxSupply",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "bytes4",
  //       name: "interfaceId",
  //       type: "bytes4"
  //     }
  //   ],
  //   name: "supportsInterface",
  //   outputs: [
  //     {
  //       internalType: "bool",
  //       name: "",
  //       type: "bool"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [],
  //   name: "symbol",
  //   outputs: [
  //     {
  //       internalType: "string",
  //       name: "",
  //       type: "string"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "uint256",
  //       name: "quantity",
  //       type: "uint256"
  //     },
  //     {
  //       internalType: "address",
  //       name: "to",
  //       type: "address"
  //     }
  //   ],
  //   name: "teamAdopt",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [],
  //   name: "toggleAdoptionEnabled",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [],
  //   name: "toggleAllowListAdoptionEnabled",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "owner",
  //       type: "address"
  //     }
  //   ],
  //   name: "tokensOfOwner",
  //   outputs: [
  //     {
  //       internalType: "uint256[]",
  //       name: "",
  //       type: "uint256[]"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "owner",
  //       type: "address"
  //     },
  //     {
  //       internalType: "uint256",
  //       name: "start",
  //       type: "uint256"
  //     },
  //     {
  //       internalType: "uint256",
  //       name: "stop",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "tokensOfOwnerIn",
  //   outputs: [
  //     {
  //       internalType: "uint256[]",
  //       name: "",
  //       type: "uint256[]"
  //     }
  //   ],
  //   stateMutability: "view",
  //   type: "function"
  // },
  // {
 
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "from",
  //       type: "address"
  //     },
  //     {
  //       internalType: "address",
  //       name: "to",
  //       type: "address"
  //     },
  //     {
  //       internalType: "uint256",
  //       name: "tokenId",
  //       type: "uint256"
  //     }
  //   ],
  //   name: "transferFrom",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [
  //     {
  //       internalType: "address",
  //       name: "newOwner",
  //       type: "address"
  //     }
  //   ],
  //   name: "transferOwnership",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // },
  // {
  //   inputs: [],
  //   name: "withdraw",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function"
  // }
] as const

