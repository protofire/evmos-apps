// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { CIRCLE_STYLES, TEXT_STYLES, stepsStatusI } from "./helpers";

export const StepsContainer = ({ step }: { step: stepsStatusI }) => {
  return (
    <li key={step.title}>
      <span className="flex cursor-default items-center">
        {CIRCLE_STYLES[step.status]}
        <span
          className={`${TEXT_STYLES[step.status]}  ml-3 text-sm font-medium`}
        >
          {step.title}
        </span>
      </span>
    </li>
  );
};
