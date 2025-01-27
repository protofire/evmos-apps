// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { ComponentProps } from "react";
import cx from "clsx";

export const Subtitle = ({
  variant = "default",
  ...rest
}: ComponentProps<"h5"> & {
  variant?: "default" | "modal-black";
}) => {
  return (
    <h5
      className={cx("my-2", {
        "text-darkGray900 font-bold text-xs ": variant === "default",
        "text-white tracking-wider text-sm md:text-lg":
          variant === "modal-black",
      })}
      {...rest}
    />
  );
};
