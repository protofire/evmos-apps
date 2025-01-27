import { toHex } from "viem";
import { getKeplrAccounts } from "./getKeplrAccounts";

export async function getKeplrAccountPubKey(chainId: string, address?: string) {
  const [account] = await getKeplrAccounts(chainId);
  if (address && address !== account.address) {
    throw new Error(
      `Keplr address ${address} does not match ${account.address} from chain ${chainId}`,
    );
  }
  return toHex(account.pubkey);
}
