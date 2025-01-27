/* eslint-disable */
/**
 * DO NOT MANUALLY EDIT THIS FILE!
 * This file is generated by calling the `pnpm run build:registry` command.
 * 
 * You can find the source code for this script on /scripts/typegen.ts
 */

export default {
  "prefix": "cosmos",
  "name": "Cosmos Hub",
  "cosmosId": "cosmoshub-4",
  "identifier": "cosmoshub",
  "gasPriceStep": {
    "low": "0.005",
    "average": "0.025",
    "high": "0.04"
  },
  "evmId": null,
  "channels": {
    "evmos": {
      "channelId": "channel-292",
      "counterpartyChannelId": "channel-3"
    }
  },
  "feeToken": "uatom",
  "cosmosRest": [
    "https://rest.cosmos.directory/cosmoshub",
    "https://cosmos-lcd.quickapi.com:443",
    "https://lcd-cosmoshub.whispernode.com",
    "https://lcd-cosmoshub.blockapsis.com",
    "https://rest-cosmoshub.ecostake.com",
    "https://api.cosmoshub.pupmos.network",
    "https://lcd.cosmos.ezstaking.io",
    "https://api-cosmoshub-ia.notional.ventures/"
  ],
  "tendermintRest": [
    "https://rpc.cosmos.directory/cosmoshub",
    "https://cosmoshub-rpc.stakely.io/"
  ],
  "evmRest": null,
  "cosmosGRPC": [
    "https://cosmoshub-rpc.stakely.io/"
  ],
  "evmRPC": [
    "https://cosmoshub-rpc.stakely.io/"
  ],
  "tokens": [
    {
      "name": "Cosmos Hub",
      "ref": "cosmos:ATOM",
      "description": "The native token of Cosmos Hub",
      "symbol": "ATOM",
      "denom": "ATOM",
      "sourcePrefix": "cosmos",
      "sourceDenom": "uatom",
      "minCoinDenom": "uatom",
      "category": "cosmos",
      "tokenRepresentation": "ATOM",
      "type": "IBC",
      "decimals": 6,
      "erc20Address": "0xC5e00D3b04563950941f7137B5AfA3a534F0D6d6",
      "handledByExternalUI": null,
      "listed": true
    }
  ],
  "explorerUrl": "https://www.mintscan.io/cosmos/txs"
} as const;