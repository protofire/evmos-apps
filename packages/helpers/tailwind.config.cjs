// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "helpers-",
  ...sharedConfig,
  plugins: [],
};