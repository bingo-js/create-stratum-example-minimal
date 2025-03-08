import { base } from "../base.js";
import { blockIndex } from "../blocks/index.js";
import { blockPackageJson } from "../blocks/packageJson.js";
import { blockREADME } from "../blocks/readme.js";

export const presetSource = base.createPreset({
  about: { name: "Source" },
  blocks: [blockIndex, blockPackageJson, blockREADME],
});
