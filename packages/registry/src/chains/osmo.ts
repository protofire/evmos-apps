/* eslint-disable */
/**
 * DO NOT MANUALLY EDIT THIS FILE!
 * This file is generated by calling the `pnpm run build:registry` command.
 * 
 * You can find the source code for this script on /scripts/typegen.ts
 */

export default {
  "prefix": "osmo",
  "name": "Osmosis",
  "cosmosId": "osmosis-1",
  "identifier": "osmosis",
  "gasPriceStep": {
    "low": "0.005",
    "average": "0.025",
    "high": "0.04"
  },
  "evmId": null,
  "channels": {
    "evmos": {
      "channelId": "channel-204",
      "counterpartyChannelId": "channel-0"
    }
  },
  "feeToken": "uosmo",
  "cosmosRest": [
    "https://rest.cosmos.directory/osmosis",
    "https://osmosis-lcd.quickapi.com:443",
    "https://lcd-osmosis.whispernode.com",
    "https://lcd-osmosis.blockapsis.com",
    "https://rest-osmosis.ecostake.com",
    "https://api-osmosis-ia.notional.ventures",
    "https://lcd.osmosis.zone",
    "https://api.osmosis.interbloc.org"
  ],
  "tendermintRest": [
    "https://rpc.cosmos.directory/osmosis"
  ],
  "evmRest": null,
  "cosmosGRPC": null,
  "evmRPC": null,
  "tokens": [
    {
      "name": "Osmosis",
      "ref": "osmo:OSMO",
      "description": "The native token of Osmosis",
      "symbol": "OSMO",
      "denom": "OSMO",
      "sourcePrefix": "osmo",
      "sourceDenom": "uosmo",
      "minCoinDenom": "uosmo",
      "category": "cosmos",
      "tokenRepresentation": "OSMO",
      "type": "IBC",
      "decimals": 6,
      "erc20Address": "0xFA3C22C069B9556A4B2f7EcE1Ee3B467909f4864",
      "handledByExternalUI": null,
      "listed": true
    }
  ],
  "explorerUrl": "https://www.mintscan.io/osmosis/txs"
} as const;