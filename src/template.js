import { base } from "./base.js";
import { presetSource } from "./presets/source.js";
import { presetSourceAndLicense } from "./presets/sourceAndLicense.js";

export const template = base.createStratumTemplate({
  presets: [presetSource, presetSourceAndLicense],
});
