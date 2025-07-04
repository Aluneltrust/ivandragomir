export const contractAddress = (0xcBe0509A36A5dEFd4a67a1FAa756FBD43e33CF69);
export const contractAbi = ([
      {
            "type": "constructor",
            "name": "",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "error",
            "name": "OperatorNotAllowed",
            "inputs": [
                  {
                        "type": "address",
                        "name": "operator",
                        "internalType": "address"
                  }
            ],
            "outputs": []
      },
      {
            "type": "event",
            "name": "Approval",
            "inputs": [
                  {
                        "type": "address",
                        "name": "owner",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "approved",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "indexed": true,
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "ApprovalForAll",
            "inputs": [
                  {
                        "type": "address",
                        "name": "owner",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "operator",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "bool",
                        "name": "approved",
                        "indexed": false,
                        "internalType": "bool"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "DefaultRoyalty",
            "inputs": [
                  {
                        "type": "address",
                        "name": "newRoyaltyRecipient",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "newRoyaltyBps",
                        "indexed": false,
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "Initialized",
            "inputs": [
                  {
                        "type": "uint8",
                        "name": "version",
                        "indexed": false,
                        "internalType": "uint8"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "OperatorRestriction",
            "inputs": [
                  {
                        "type": "bool",
                        "name": "restriction",
                        "indexed": false,
                        "internalType": "bool"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "OwnerUpdated",
            "inputs": [
                  {
                        "type": "address",
                        "name": "prevOwner",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "newOwner",
                        "indexed": true,
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "PlatformFeeInfoUpdated",
            "inputs": [
                  {
                        "type": "address",
                        "name": "platformFeeRecipient",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "platformFeeBps",
                        "indexed": false,
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "PrimarySaleRecipientUpdated",
            "inputs": [
                  {
                        "type": "address",
                        "name": "recipient",
                        "indexed": true,
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "RoleAdminChanged",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "indexed": true,
                        "internalType": "bytes32"
                  },
                  {
                        "type": "bytes32",
                        "name": "previousAdminRole",
                        "indexed": true,
                        "internalType": "bytes32"
                  },
                  {
                        "type": "bytes32",
                        "name": "newAdminRole",
                        "indexed": true,
                        "internalType": "bytes32"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "RoleGranted",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "indexed": true,
                        "internalType": "bytes32"
                  },
                  {
                        "type": "address",
                        "name": "account",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "sender",
                        "indexed": true,
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "RoleRevoked",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "indexed": true,
                        "internalType": "bytes32"
                  },
                  {
                        "type": "address",
                        "name": "account",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "sender",
                        "indexed": true,
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "RoyaltyForToken",
            "inputs": [
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "indexed": true,
                        "internalType": "uint256"
                  },
                  {
                        "type": "address",
                        "name": "royaltyRecipient",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "royaltyBps",
                        "indexed": false,
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "TokensMinted",
            "inputs": [
                  {
                        "type": "address",
                        "name": "mintedTo",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "tokenIdMinted",
                        "indexed": true,
                        "internalType": "uint256"
                  },
                  {
                        "type": "string",
                        "name": "uri",
                        "indexed": false,
                        "internalType": "string"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "TokensMintedWithSignature",
            "inputs": [
                  {
                        "type": "address",
                        "name": "signer",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "mintedTo",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "tokenIdMinted",
                        "indexed": true,
                        "internalType": "uint256"
                  },
                  {
                        "type": "tuple",
                        "name": "mintRequest",
                        "components": [
                              {
                                    "type": "address",
                                    "name": "to",
                                    "internalType": "address"
                              },
                              {
                                    "type": "address",
                                    "name": "royaltyRecipient",
                                    "internalType": "address"
                              },
                              {
                                    "type": "uint256",
                                    "name": "royaltyBps",
                                    "internalType": "uint256"
                              },
                              {
                                    "type": "address",
                                    "name": "primarySaleRecipient",
                                    "internalType": "address"
                              },
                              {
                                    "type": "string",
                                    "name": "uri",
                                    "internalType": "string"
                              },
                              {
                                    "type": "uint256",
                                    "name": "price",
                                    "internalType": "uint256"
                              },
                              {
                                    "type": "address",
                                    "name": "currency",
                                    "internalType": "address"
                              },
                              {
                                    "type": "uint128",
                                    "name": "validityStartTimestamp",
                                    "internalType": "uint128"
                              },
                              {
                                    "type": "uint128",
                                    "name": "validityEndTimestamp",
                                    "internalType": "uint128"
                              },
                              {
                                    "type": "bytes32",
                                    "name": "uid",
                                    "internalType": "bytes32"
                              }
                        ],
                        "indexed": false,
                        "internalType": "struct ITokenERC721.MintRequest"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                  {
                        "type": "address",
                        "name": "from",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "to",
                        "indexed": true,
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "indexed": true,
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "anonymous": false
      },
      {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "inputs": [],
            "outputs": [
                  {
                        "type": "bytes32",
                        "name": "",
                        "internalType": "bytes32"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "approve",
            "inputs": [
                  {
                        "type": "address",
                        "name": "operator",
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                  {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address"
                  }
            ],
            "outputs": [
                  {
                        "type": "uint256",
                        "name": "",
                        "internalType": "uint256"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "burn",
            "inputs": [
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "contractType",
            "inputs": [],
            "outputs": [
                  {
                        "type": "bytes32",
                        "name": "",
                        "internalType": "bytes32"
                  }
            ],
            "stateMutability": "pure"
      },
      {
            "type": "function",
            "name": "contractURI",
            "inputs": [],
            "outputs": [
                  {
                        "type": "string",
                        "name": "",
                        "internalType": "string"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "contractVersion",
            "inputs": [],
            "outputs": [
                  {
                        "type": "uint8",
                        "name": "",
                        "internalType": "uint8"
                  }
            ],
            "stateMutability": "pure"
      },
      {
            "type": "function",
            "name": "getApproved",
            "inputs": [
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "getDefaultRoyaltyInfo",
            "inputs": [],
            "outputs": [
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  },
                  {
                        "type": "uint16",
                        "name": "",
                        "internalType": "uint16"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "getPlatformFeeInfo",
            "inputs": [],
            "outputs": [
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  },
                  {
                        "type": "uint16",
                        "name": "",
                        "internalType": "uint16"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "getRoleAdmin",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "internalType": "bytes32"
                  }
            ],
            "outputs": [
                  {
                        "type": "bytes32",
                        "name": "",
                        "internalType": "bytes32"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "getRoleMember",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "internalType": "bytes32"
                  },
                  {
                        "type": "uint256",
                        "name": "index",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "getRoleMemberCount",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "internalType": "bytes32"
                  }
            ],
            "outputs": [
                  {
                        "type": "uint256",
                        "name": "",
                        "internalType": "uint256"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "getRoyaltyInfoForToken",
            "inputs": [
                  {
                        "type": "uint256",
                        "name": "_tokenId",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  },
                  {
                        "type": "uint16",
                        "name": "",
                        "internalType": "uint16"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "grantRole",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "internalType": "bytes32"
                  },
                  {
                        "type": "address",
                        "name": "account",
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "hasRole",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "internalType": "bytes32"
                  },
                  {
                        "type": "address",
                        "name": "account",
                        "internalType": "address"
                  }
            ],
            "outputs": [
                  {
                        "type": "bool",
                        "name": "",
                        "internalType": "bool"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "initialize",
            "inputs": [
                  {
                        "type": "address",
                        "name": "_defaultAdmin",
                        "internalType": "address"
                  },
                  {
                        "type": "string",
                        "name": "_name",
                        "internalType": "string"
                  },
                  {
                        "type": "string",
                        "name": "_symbol",
                        "internalType": "string"
                  },
                  {
                        "type": "string",
                        "name": "_contractURI",
                        "internalType": "string"
                  },
                  {
                        "type": "address[]",
                        "name": "_trustedForwarders",
                        "internalType": "address[]"
                  },
                  {
                        "type": "address",
                        "name": "_saleRecipient",
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "_royaltyRecipient",
                        "internalType": "address"
                  },
                  {
                        "type": "uint128",
                        "name": "_royaltyBps",
                        "internalType": "uint128"
                  },
                  {
                        "type": "uint128",
                        "name": "_platformFeeBps",
                        "internalType": "uint128"
                  },
                  {
                        "type": "address",
                        "name": "_platformFeeRecipient",
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "isApprovedForAll",
            "inputs": [
                  {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "operator",
                        "internalType": "address"
                  }
            ],
            "outputs": [
                  {
                        "type": "bool",
                        "name": "",
                        "internalType": "bool"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "isTrustedForwarder",
            "inputs": [
                  {
                        "type": "address",
                        "name": "forwarder",
                        "internalType": "address"
                  }
            ],
            "outputs": [
                  {
                        "type": "bool",
                        "name": "",
                        "internalType": "bool"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "mintTo",
            "inputs": [
                  {
                        "type": "address",
                        "name": "_to",
                        "internalType": "address"
                  },
                  {
                        "type": "string",
                        "name": "_uri",
                        "internalType": "string"
                  }
            ],
            "outputs": [
                  {
                        "type": "uint256",
                        "name": "",
                        "internalType": "uint256"
                  }
            ],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "mintWithSignature",
            "inputs": [
                  {
                        "type": "tuple",
                        "name": "_req",
                        "components": [
                              {
                                    "type": "address",
                                    "name": "to",
                                    "internalType": "address"
                              },
                              {
                                    "type": "address",
                                    "name": "royaltyRecipient",
                                    "internalType": "address"
                              },
                              {
                                    "type": "uint256",
                                    "name": "royaltyBps",
                                    "internalType": "uint256"
                              },
                              {
                                    "type": "address",
                                    "name": "primarySaleRecipient",
                                    "internalType": "address"
                              },
                              {
                                    "type": "string",
                                    "name": "uri",
                                    "internalType": "string"
                              },
                              {
                                    "type": "uint256",
                                    "name": "price",
                                    "internalType": "uint256"
                              },
                              {
                                    "type": "address",
                                    "name": "currency",
                                    "internalType": "address"
                              },
                              {
                                    "type": "uint128",
                                    "name": "validityStartTimestamp",
                                    "internalType": "uint128"
                              },
                              {
                                    "type": "uint128",
                                    "name": "validityEndTimestamp",
                                    "internalType": "uint128"
                              },
                              {
                                    "type": "bytes32",
                                    "name": "uid",
                                    "internalType": "bytes32"
                              }
                        ],
                        "internalType": "struct ITokenERC721.MintRequest"
                  },
                  {
                        "type": "bytes",
                        "name": "_signature",
                        "internalType": "bytes"
                  }
            ],
            "outputs": [
                  {
                        "type": "uint256",
                        "name": "tokenIdMinted",
                        "internalType": "uint256"
                  }
            ],
            "stateMutability": "payable"
      },
      {
            "type": "function",
            "name": "multicall",
            "inputs": [
                  {
                        "type": "bytes[]",
                        "name": "data",
                        "internalType": "bytes[]"
                  }
            ],
            "outputs": [
                  {
                        "type": "bytes[]",
                        "name": "results",
                        "internalType": "bytes[]"
                  }
            ],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                  {
                        "type": "string",
                        "name": "",
                        "internalType": "string"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "nextTokenIdToMint",
            "inputs": [],
            "outputs": [
                  {
                        "type": "uint256",
                        "name": "",
                        "internalType": "uint256"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "operatorRestriction",
            "inputs": [],
            "outputs": [
                  {
                        "type": "bool",
                        "name": "",
                        "internalType": "bool"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "ownerOf",
            "inputs": [
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "platformFeeRecipient",
            "inputs": [],
            "outputs": [
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "primarySaleRecipient",
            "inputs": [],
            "outputs": [
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "renounceRole",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "internalType": "bytes32"
                  },
                  {
                        "type": "address",
                        "name": "account",
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "revokeRole",
            "inputs": [
                  {
                        "type": "bytes32",
                        "name": "role",
                        "internalType": "bytes32"
                  },
                  {
                        "type": "address",
                        "name": "account",
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "royaltyInfo",
            "inputs": [
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                  },
                  {
                        "type": "uint256",
                        "name": "salePrice",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [
                  {
                        "type": "address",
                        "name": "receiver",
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "royaltyAmount",
                        "internalType": "uint256"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [
                  {
                        "type": "address",
                        "name": "from",
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "to",
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [
                  {
                        "type": "address",
                        "name": "from",
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "to",
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                  },
                  {
                        "type": "bytes",
                        "name": "data",
                        "internalType": "bytes"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "setApprovalForAll",
            "inputs": [
                  {
                        "type": "address",
                        "name": "operator",
                        "internalType": "address"
                  },
                  {
                        "type": "bool",
                        "name": "approved",
                        "internalType": "bool"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "setContractURI",
            "inputs": [
                  {
                        "type": "string",
                        "name": "_uri",
                        "internalType": "string"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "setDefaultRoyaltyInfo",
            "inputs": [
                  {
                        "type": "address",
                        "name": "_royaltyRecipient",
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "_royaltyBps",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "setOperatorRestriction",
            "inputs": [
                  {
                        "type": "bool",
                        "name": "_restriction",
                        "internalType": "bool"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "setOwner",
            "inputs": [
                  {
                        "type": "address",
                        "name": "_newOwner",
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "setPlatformFeeInfo",
            "inputs": [
                  {
                        "type": "address",
                        "name": "_platformFeeRecipient",
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "_platformFeeBps",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "setPrimarySaleRecipient",
            "inputs": [
                  {
                        "type": "address",
                        "name": "_saleRecipient",
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "setRoyaltyInfoForToken",
            "inputs": [
                  {
                        "type": "uint256",
                        "name": "_tokenId",
                        "internalType": "uint256"
                  },
                  {
                        "type": "address",
                        "name": "_recipient",
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "_bps",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "subscribeToRegistry",
            "inputs": [
                  {
                        "type": "address",
                        "name": "_subscription",
                        "internalType": "address"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "supportsInterface",
            "inputs": [
                  {
                        "type": "bytes4",
                        "name": "interfaceId",
                        "internalType": "bytes4"
                  }
            ],
            "outputs": [
                  {
                        "type": "bool",
                        "name": "",
                        "internalType": "bool"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [
                  {
                        "type": "string",
                        "name": "",
                        "internalType": "string"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "tokenByIndex",
            "inputs": [
                  {
                        "type": "uint256",
                        "name": "index",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [
                  {
                        "type": "uint256",
                        "name": "",
                        "internalType": "uint256"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "tokenOfOwnerByIndex",
            "inputs": [
                  {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "index",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [
                  {
                        "type": "uint256",
                        "name": "",
                        "internalType": "uint256"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "tokenURI",
            "inputs": [
                  {
                        "type": "uint256",
                        "name": "_tokenId",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [
                  {
                        "type": "string",
                        "name": "",
                        "internalType": "string"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "totalSupply",
            "inputs": [],
            "outputs": [
                  {
                        "type": "uint256",
                        "name": "",
                        "internalType": "uint256"
                  }
            ],
            "stateMutability": "view"
      },
      {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                  {
                        "type": "address",
                        "name": "from",
                        "internalType": "address"
                  },
                  {
                        "type": "address",
                        "name": "to",
                        "internalType": "address"
                  },
                  {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                  }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
      },
      {
            "type": "function",
            "name": "verify",
            "inputs": [
                  {
                        "type": "tuple",
                        "name": "_req",
                        "components": [
                              {
                                    "type": "address",
                                    "name": "to",
                                    "internalType": "address"
                              },
                              {
                                    "type": "address",
                                    "name": "royaltyRecipient",
                                    "internalType": "address"
                              },
                              {
                                    "type": "uint256",
                                    "name": "royaltyBps",
                                    "internalType": "uint256"
                              },
                              {
                                    "type": "address",
                                    "name": "primarySaleRecipient",
                                    "internalType": "address"
                              },
                              {
                                    "type": "string",
                                    "name": "uri",
                                    "internalType": "string"
                              },
                              {
                                    "type": "uint256",
                                    "name": "price",
                                    "internalType": "uint256"
                              },
                              {
                                    "type": "address",
                                    "name": "currency",
                                    "internalType": "address"
                              },
                              {
                                    "type": "uint128",
                                    "name": "validityStartTimestamp",
                                    "internalType": "uint128"
                              },
                              {
                                    "type": "uint128",
                                    "name": "validityEndTimestamp",
                                    "internalType": "uint128"
                              },
                              {
                                    "type": "bytes32",
                                    "name": "uid",
                                    "internalType": "bytes32"
                              }
                        ],
                        "internalType": "struct ITokenERC721.MintRequest"
                  },
                  {
                        "type": "bytes",
                        "name": "_signature",
                        "internalType": "bytes"
                  }
            ],
            "outputs": [
                  {
                        "type": "bool",
                        "name": "",
                        "internalType": "bool"
                  },
                  {
                        "type": "address",
                        "name": "",
                        "internalType": "address"
                  }
            ],
            "stateMutability": "view"
      }
])