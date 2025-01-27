import { Chain, Prefix, Token, TokenMinDenom } from "./types";
import { getChain } from "./get-chain";
export function getToken<T extends Prefix>(
  prefix: T,
  token: Extract<Chain, { prefix: T }>["tokens"][number]["minCoinDenom"]
): Token;
export function getToken<T extends string>(
  prefix: T,
  token: TokenMinDenom | (string & {})
): Token | null;
export function getToken<T extends Prefix>(
  prefix: T,
  token: string
): Token | null {
  return getChain(prefix)?.tokens.find((t) => t.minCoinDenom === token) ?? null;
}
