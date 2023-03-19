import { BigNumber } from 'ethers'
import { useContractReads } from 'wagmi'
import { abi, contractAddresses } from '../../abis/Contracts'

export const wagmigotchiContractConfig = {
  address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
  // abi: [
  //   {
  //     inputs: [],
  //     name: 'getAlive',
  //     outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
  //     stateMutability: 'view',
  //     type: 'function',
  //   },
  //   {
  //     inputs: [{ internalType: 'address', name: '', type: 'address' }],
  //     name: 'love',
  //     outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  //     stateMutability: 'view',
  //     type: 'function',
  //   },
  // ],
} as const

export const mlootContractConfig = {
  address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
  // abi: [
  //   {
  //     inputs: [
  //       { internalType: 'address', name: 'owner', type: 'address' },
  //       { internalType: 'uint256', name: 'index', type: 'uint256' },
  //     ],
  //     name: 'tokenOfOwnerByIndex',
  //     outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  //     stateMutability: 'view',
  //     type: 'function',
  //   },
  // ],
} as const

export function ReadContracts() {
  const contract = {
    address: '0x0df1ff94e3db9a0a2620f91a83bf0811c3170dbc',
    abi: [{
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
  ] as const
  } as const

  const { data, isSuccess, isLoading } = useContractReads({
    contracts: [
      {
        ...contract,
        functionName: 'adoptionEnabled',
        chainId: 5,
      },
      {
        ...contract,
        functionName: 'MAX_PER_TX',
      }
    ] as const,

  })


  return (
    <div>
      <div>Data:</div>
      {isLoading && <div>loading...</div>}
      {isSuccess &&
        data?.map((data) => (
          <div key={JSON.stringify(data)}>{JSON.stringify(data)}</div>
        ))}
    </div>
  )
}
