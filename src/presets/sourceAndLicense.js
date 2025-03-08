import { base } from "../base.js";
import { blockLicense } from "../blocks/license.js";
import { presetSource } from "./source.js";

export const presetSourceAndLicense = base.createPreset({
  about: { name: "Source And License" },
  blocks: [...presetSource.blocks, blockLicense],
});
