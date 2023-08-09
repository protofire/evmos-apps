// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

type C14IconProps = React.SVGAttributes<SVGElement> & {
  color?: string;
};

export const C14Icon: React.FC<C14IconProps> = ({
  width = "34",
  height = "34",
  ...restProps
}) => {
  return (
    <svg
      {...restProps}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_960_84" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_960_84"
          width="100"
          height="100"
          // eslint-disable-next-line no-secrets/no-secrets
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
