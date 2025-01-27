import { connect } from "wagmi/actions";
import { CONNECTOR_MAP } from "../wagmi";

export function connectWith(provider: keyof typeof CONNECTOR_MAP) {
  return connect({
    connector: CONNECTOR_MAP[provider],
  });
}
