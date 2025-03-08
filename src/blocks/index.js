import { base } from "../base.js";

export const blockIndex = base.createBlock({
  about: { name: "Index" },
  produce() {
    return {
      files: {
        "index.js": `console.log("Hello, world!");
`,
      },
    };
  },
});
