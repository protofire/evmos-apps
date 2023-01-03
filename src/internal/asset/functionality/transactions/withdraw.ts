import { BigNumber, utils } from "ethers";
import { EVMOS_NETWORK_FOR_BACKEND } from "../../../wallet/functionality/networkConfig";
import { Signer } from "../../../wallet/functionality/signing/genericSigner";
import { BROADCASTED_NOTIFICATIONS } from "./errors";
import { ibcTransferBackendCall } from "./ibcTransfer";
import { IBCChainParams } from "./types";

const feeAmountForWithdraw = BigNumber.from("200000000000000000");

export async function executeWithdraw(
  pubkey: string,
  address: string,
  params: IBCChainParams,
  feeBalance: BigNumber,
  extension: string
) {
  if (feeBalance.lt(feeAmountForWithdraw)) {
    return {
      error: true,
      message: "Insuficient EVMOS balance to pay the fee",
      title: "Wrong params",
    };
  }

  if (utils.parseEther(params.amount).lte(BigNumber.from("0"))) {
    return {
      error: true,
      message: "Amount to send must be bigger than 0",
      title: "Wrong params",
    };
  }

  //  TODO: if value is bigger than amount, return error
  const tx = await ibcTransferBackendCall(pubkey, address, params);
  if (tx.error === true || tx.data === null) {
    // Error generating the transaction
    return { error: true, message: tx.message, title: "Error generating tx" };
  }

  const signer = new Signer();
  const sign = await signer.signBackendTx(
    address,
    tx.data,
    EVMOS_NETWORK_FOR_BACKEND,
    extension
  );
  if (sign.result === false) {
    return { error: true, message: sign.message, title: "Error signing tx" };
  }

  const broadcastResponse = await signer.broadcastTxToBackend();

  if (broadcastResponse.error === true) {
    // TODO: add sentry call here!
    return {
      error: true,
      message: broadcastResponse.message,
      title: BROADCASTED_NOTIFICATIONS.ErrorTitle,
    };
  }

  return {
    error: false,
    message: `Transaction submit with hash: ${broadcastResponse.txhash}`,
    title: BROADCASTED_NOTIFICATIONS.SuccessTitle,
  };
}
