import { useState } from "react";
import { ModalTitle } from "../../../common/Modal";
import FromWithdraw from "../common/withdraw/FromWithdraw";
import AmountWithdraw from "../common/withdraw/AmountWithdraw";
import { TableDataElement } from "../../../../internal/asset/functionality/table/normalizeData";
import ConfirmButton from "../../../common/ConfirmButton";
import ToWithdraw from "../common/withdraw/ToWithdraw";
import RedirectLink from "../common/RedirectLink";
import { ButtonActionsProps } from "./types";
import { useWithdraw } from "./hooks/useWithdraw";

const WithdrawSTR = ({
  data,
  feeBalance,
  address,
  setShow,
}: ButtonActionsProps) => {
  const [confirmClicked, setConfirmClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [token, setToken] = useState<TableDataElement>();
  const [chain, setChain] = useState<TableDataElement>();
  const useWithdrawProps = {
    setConfirmClicked,
    setShow,
    token,
    inputValue,
    receiverAddress,
    address,
    setDisabled,
    feeBalance,
    chain,
  };

  const { handleConfirmButton } = useWithdraw(useWithdrawProps);

  const amountProps = {
    data: data,
    setToken: setToken,
    token: token,
    value: inputValue,
    setValue: setInputValue,
    confirmClicked: confirmClicked,
    setReceiverAddress: setReceiverAddress,
    setChain: setChain,
    chain: chain,
  };

  const withdrawContent = () => {
    return (
      <>
        <ToWithdraw
          token={token}
          receiverAddress={receiverAddress}
          setReceiverAddress={setReceiverAddress}
          confirmClicked={confirmClicked}
          dropChainProps={{
            placeholder: "Select chain...",
            data: data,
            token: token,
            chain: chain,
            setChain: setChain,
            setAddress: setReceiverAddress,
          }}
        />
        <ConfirmButton
          disabled={disabled}
          text="WITHDRAW"
          onClick={handleConfirmButton}
        />
      </>
    );
  };

  const withdrawDiv = () => {
    // No token selected, display deposit and confirm button
    if (token === undefined) {
      return withdrawContent();
    }

    // If chain is from axelar, return redirect component
    if (chain !== undefined && chain.handledByExternalUI !== null) {
      return (
        <>
          <ToWithdraw
            token={token}
            receiverAddress={receiverAddress}
            setReceiverAddress={setReceiverAddress}
            confirmClicked={confirmClicked}
            dropChainProps={{
              placeholder: "Select chain...",
              data: data,
              token: token,
              chain: chain,
              setChain: setChain,
              setAddress: setReceiverAddress,
            }}
          />
          <RedirectLink
            href={chain.handledByExternalUI.url}
            text="Withdraw from Axelar"
          />
        </>
      );
    }
    // If token is from axelar, return redirect component
    if (token !== undefined && token.handledByExternalUI !== null) {
      return (
        <RedirectLink
          href={token.handledByExternalUI.url}
          text="Withdraw from Axelar"
        />
      );
    }

    return withdrawContent();
  };

  return (
    <>
      <ModalTitle title="Withdraw Tokens" />
      <div className="text-darkGray3 space-y-3">
        <FromWithdraw address={address} />
        <AmountWithdraw amountProps={amountProps} />
        {withdrawDiv()}
      </div>
    </>
  );
};

export default WithdrawSTR;