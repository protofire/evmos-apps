// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

export * from "./wallet";
export * from "./api";
export * from "./utils";
export * from "./registry-actions";

// snackbars
export { Snackbars } from "./notification/Snackbars";
export { addSnackbar } from "./notification/redux/notificationSlice";
export { KEPLR_NOTIFICATIONS } from "./internal/wallet/functionality/errors";
export { METAMASK_NOTIFICATIONS } from "./internal/wallet/functionality/errors";
export { SNACKBAR_TYPES } from "./notification/types";
export { SNACKBAR_CONTENT_TYPES } from "./notification/types";
export { MODAL_NOTIFICATIONS } from "./notification/errors";
export { BROADCASTED_NOTIFICATIONS } from "./notification/errors";
export { EXECUTED_NOTIFICATIONS } from "./notification/errors";
export { GENERATING_TX_NOTIFICATIONS } from "./notification/errors";
export { WALLET_NOTIFICATIONS } from "./notification/errors";
export { BALANCE_NOTIFICATIONS } from "./notification/errors";
export { SIGNING_NOTIFICATIONS } from "./notification/errors";
export { INCLUDED_BLOCK_NOTIFICATIONS } from "./notification/errors";
export { snackErrorConnectingKeplr } from "./notification/helpers";
export { snackErrorConnectingMetaMask } from "./notification/helpers";
export { snackErrorGettingBalanceExtChain } from "./notification/helpers";
export { snackBroadcastSuccessful } from "./notification/helpers";
export { snackErrorGeneratingTx } from "./notification/helpers";
export { snackRequestRejected } from "./notification/helpers";
export { snackExecuteIBCTransfer } from "./notification/helpers";
export { snackIBCInformation } from "./notification/helpers";
export { snackWarningLedger } from "./notification/helpers";

// redux
export { store } from "./redux/Store";
export { KEPLR_KEY } from "./internal/wallet/functionality/wallet";
export { METAMASK_KEY } from "./internal/wallet/functionality/wallet";
export { WALLECT_CONNECT_KEY } from "./internal/wallet/functionality/wallet";
export type { StoreType } from "./redux/Store";
export type { AppDispatch } from "./redux/Store";
export { getAllSnackbars } from "./notification/redux/notificationSlice";
export * from "./internal/wallet/functionality/wallet";
// components
export { WalletConnection } from "./copilot/WalletConnection";
export { ButtonWallet } from "./wallet/ButtonWallet";
// configs
export { EVMOS_SYMBOL } from "./internal/wallet/functionality/networkConfig";
export { EVMOS_DECIMALS } from "./internal/wallet/functionality/networkConfig";
export { EVMOS_BACKEND } from "./internal/wallet/functionality/networkConfig";
export { EVMOS_NETWORK_FOR_BACKEND } from "./internal/wallet/functionality/networkConfig";
export { EVMOS_CHAIN } from "./internal/wallet/functionality/networkConfig";
export { EVMOS_MINIMAL_COIN_DENOM } from "./internal/wallet/functionality/networkConfig";
export { EVMOS_RPC_URL } from "./internal/wallet/functionality/networkConfig";
export { EVMOS_CHAIN_NAME } from "./internal/wallet/functionality/networkConfig";

// utils
export { truncateAddress } from "./internal/wallet/style/format";
export { fetchWithTimeout } from "./internal/wallet/functionality/fetch";

// wallet
export { getKeplrAddressByChain } from "./internal/wallet/functionality/keplr/keplrHelpers";
export { getWallet } from "./internal/wallet/functionality/metamask/metamaskHelpers";
export { addToken } from "./internal/wallet/functionality/metamask/metamaskHelpers";
export type { Token } from "./internal/wallet/functionality/metamask/metamaskHelpers";
export { broadcastAminoBackendTxToBackend } from "./internal/wallet/functionality/signing";

// Probably move it to assets
export type { IBCChainParams } from "./notification/transactionsTypes";
export type { IBCTransferResponse } from "./notification/transactionsTypes";
export type { ConvertMsg } from "./notification/transactionsTypes";
export type { executedTx } from "./notification/transactionsTypes";
export { TransactionStatus } from "./notification/transactionsTypes";
export type { txStatusErrorResponse } from "./notification/transactionsTypes";
export type { txStatusResponse } from "./notification/transactionsTypes";

export {
  changeNetworkToEvmosMainnet,
  switchEthereumChain,
  isMetamaskInstalled,
  connectHandler,
  isWalletSelected,
  isEvmosChain,
} from "./internal/wallet/functionality/metamask/metamaskHelpers";

export {
  queryPubKey,
  getSequence,
} from "./internal/wallet/functionality/pubkey";
export { useEvmosBalance } from "./internal/wallet/functionality/hooks/useEvmosBalance";
export { useAssets } from "./api/useAssets";
export { useStake } from "./api/useStake";
export { useRewards } from "./hooks/rewards/useRewards";

export {
  getBalance,
  getBalanceInDollars,
  getNumberBalance,
  getNumberBalanceInDollars,
} from "./hooks/rewards/helpers";
