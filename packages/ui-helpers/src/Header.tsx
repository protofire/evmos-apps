// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import Link from "next/link";
import { EvmosRedIcon, Logo } from "icons";
import { EVMOS_PAGE_URL } from "constants-helper";
import { LaunchContainer } from "./launchPad/Container";
import { LaunchPadProps } from "./launchPad/types";

export const Header = ({
  walletConnectionButton,
  onClick,
  price,
  pageName,
  launchPad,
}: {
  walletConnectionButton?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  price?: string;
  pageName: string;
  launchPad: LaunchPadProps;
}) => {
  return (
    <div className="text-pearl mb-3 flex flex-col md:mx-0 md:h-32 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center justify-center md:justify-start">
        <Link
          href={EVMOS_PAGE_URL}
          rel="noreferrer"
          className="flex items-center space-x-3 md:pr-14"
          aria-label="home"
          onClick={onClick}
        >
          <Logo className="h-20 w-32 md:w-36" />
          <span className="text-red text-3xl font-bold">{pageName}</span>
        </Link>
      </div>
      <div className="flex items-center justify-center md:space-x-16">
        <div className="font-sm text-pearl bg-darGray800 hidden cursor-default items-center justify-center space-x-3 rounded-full px-4 py-2 font-bold md:flex">
          <EvmosRedIcon width={"20"} height={"20"} />
          <span>{price}</span>
        </div>
        <div className="flex items-center space-x-3">
          <LaunchContainer launchPad={launchPad} />
          {walletConnectionButton}
        </div>
      </div>
    </div>
  );
};
